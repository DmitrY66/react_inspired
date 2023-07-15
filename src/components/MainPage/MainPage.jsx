import st from './MainPage.module.scss';
import { Container } from "../Layout/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../../features/goodsSlice";
import { Product } from '../Product/Product.jsx';

export const MainPage = ({ gender = 'women' }) => {
  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchGoods(gender));
  }, [gender, dispatch]);

  return (
    <section className={st.goods}>
      <Container>
        <h2 className={st.title}>Новинки</h2>
        <ul className={st.list}>
          {goodsList.map(item => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
};
