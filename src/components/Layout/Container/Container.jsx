import cn from 'classnames';
import st from './Container.module.scss';

export const Container = ({ className, children }) => {

  return (
    <div className={cn(st.container, className)}>{children}</div>
  )
};
