import st from './Color.module.scss';
import cn from 'classnames';
import { useEffect, useRef } from "react";

export const Color = ({ color, check }) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color);
  }, [color]);

  return (
    <li
      className={cn(st.color, check ? st.colorCheck : '')}
      // style={{ '--data-color': color }}
      ref={colorRef}
    />
  );
};
