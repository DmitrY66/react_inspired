import { NavLink, useLocation } from "react-router-dom";
import st from './Category.module.scss';
import cn from 'classnames';


export const Category = ({ list }) => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';
  const categoriesList = list.find(item => item.link === gender);

  return (
    <ul className={st.category}>
      {categoriesList.categories.map(item => (
        <li key={item.link} className={st.item}>
          <NavLink className={({ isActive }) => cn(st.link, isActive && st.linkActive)}
            to={`${gender}/${item.link}`}>{item.title}</NavLink>
          {/* <ul className={st.categorySublist}>
            {
              item.categories.map(elem => (
                <li key={elem.link}>
                  <NavLink
                    className={st.link}
                    to={`${item.link}/${elem.link}`}>{elem.title}</NavLink>
                </li>
              ))
            }
          </ul> */}
        </li>)
      )}
    </ul>
  )
};
