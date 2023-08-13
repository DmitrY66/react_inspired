import st from './Count.module.scss';
import cn from 'classnames';

export const Count = ({
  className,
  count,
  handleIncrement,
  handleDecrement,
}) => {

  return (
    <div className={cn(st.count, className)}>
      <button
        className={st.item}
        type='button'
        onClick={handleDecrement}
      >-</button>

      <span className={cn(st.item, st.number)}>{count}</span>

      <button
        className={st.item}
        type='button'
        onClick={handleIncrement}
      >+</button>
    </div>
  )
};
