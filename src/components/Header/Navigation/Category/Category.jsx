import { NavLink } from "react-router-dom";
import st from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from "react-redux";


export const Category = () => {
  const { activeGender, categories } = useSelector(state => state.navigation);

  return (
    <ul className={st.category}>
      {categories[activeGender]?.list?.map(item => (
        <li key={item.slug} className={st.item}>
          <NavLink className={({ isActive }) => cn(st.link, isActive && st.linkActive)}
            to={`/catalog/${activeGender}/${item.slug}`}>{item.title}</NavLink>
        </li>)
      )}
    </ul>
  )
};
