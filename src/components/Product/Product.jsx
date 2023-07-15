import { NavLink } from 'react-router-dom';
import { API_URL } from '../../consts.js';
import { ReactComponent as Like } from '../../assets/heart.svg';
import st from './Product.module.scss';
import { ColorList } from '../ColorList/ColorList.jsx';

export const Product = ({ id, pic, title, price, colors }) => {

  return (
    <article className={st.product}>
      <NavLink className={st.product} to={`product/${id}`}>
        <img className={st.image} src={`${API_URL}${pic}`} />

        <h3 className={st.title}>{title}</h3>

        <div className={st.row}>
          <p className={st.price}>руб {price}</p>

          <button className={st.favorite}>
            <Like />
          </button>

          <ColorList colors={colors} />
        </div>
      </NavLink>
    </article>
  );
}
