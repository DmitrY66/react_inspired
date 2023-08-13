import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container';
import st from './ProductPage.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../features/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../consts';
import { ColorList } from '../ColorList/ColorList';
import { ReactComponent as Like } from '../../assets/heart.svg';
import { Count } from '../Count/Count';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(state => state.product);
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState();

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount((prevCount) => prevCount - 1)
  };

  const handleColorChange = e => {
    setSelectedColor(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  return (
    <section className={st.card}>
      <Container className={st.container}>
        <img src={`${API_URL}${product.pic}`} alt={product.title} />
        <form className={st.content}>
          <h2 className={st.title}>{product.title}</h2>

          <p className={st.price}>руб {product.price}</p>

          <div className={st.vendorCode}>
            <span className={st.subtitle}>Артикул</span>
            <span className={st.id}>{product.id}</span>
          </div>

          <div className={st.color}>
            <p className={cn(st.subtitle, st.colorTitle)}>Цвет</p>
            <ColorList
              colors={product.colors}
              selectedColor={selectedColor}
              handleColorChange={handleColorChange}
            />
          </div>

          <div className={st.description}>
            <p className={cn(st.subtitle, st.descriptionTitle)}>Описание</p>
            <p className={st.descriptionText}>{product.description}</p>
          </div>

          <div className={st.control}>
            <Count
              className={st.count}
              count={count}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />

            <button className={st.addCart} type='submit'>В корзину</button>

            <button
              className={st.favorite}
              type='button'
              aria-label='Добавить в избранное'>
              <Like />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};
