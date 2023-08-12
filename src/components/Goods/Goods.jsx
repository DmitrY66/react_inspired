import { useSelector } from 'react-redux';
import st from './Goods.module.scss'
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';

export const Goods = ({ categoryData }) => {

  const { goodsList } = useSelector(state => state.goods);


  const title = categoryData?.title ?? 'Новинки';


  return (
    <section className={st.goods}>
      <Container>
        <h2 className={st.title}>{title}</h2>
        <ul className={st.list}>
          {goodsList.map(item => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};