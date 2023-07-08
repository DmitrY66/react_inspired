import { NavLink, useLocation } from 'react-router-dom';
import st from './Gender.module.scss';
import cn from 'classnames';

export const Gender = ({ list }) => {
  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';

  return (
    <ul className={st.gender}>
      {list.map(item => (
        <li key={item.link} className={st.item}>
          <NavLink
            className={({ isActive }) =>
              cn(st.link, (isActive || gender === item.link) && st.linkActive)
            }
            to={item.link}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  )
};
