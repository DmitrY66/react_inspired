import st from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';
import { Top } from './Top/Top';

export const Header = () => {

  return (
    <header className={st.header}>
      <Top />
      <Navigation />
    </header>
  )
};
