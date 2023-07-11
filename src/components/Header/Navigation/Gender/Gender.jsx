import { NavLink } from 'react-router-dom';
import st from './Gender.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const Gender = () => {
  const {activeGender, genderList, categories} = useSelector(state => state.navigation);

  return (
    <ul className={st.gender}>
      {genderList.map(gender => (
        <li key={gender} className={st.item}>
          <NavLink
            className={({ isActive }) =>
              cn(st.link, (isActive || gender === activeGender) && st.linkActive)
            }
            to={gender}>{categories[gender].title}</NavLink>
        </li>
      ))}
    </ul>
  )
};
