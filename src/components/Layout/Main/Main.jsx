import st from './Main.module.scss';

export const Main = ({ children }) => {

  return (
    <div className={st.main}>{children}</div>
  )
};
