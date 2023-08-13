import st from './ColorLabel.module.scss';
import { useEffect, useRef } from "react";

export const ColorLabel = ({
  color,
  check,
  selectedColor,
  handleColorChange,
}) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color?.code);
  }, [color]);

  return (
    <label className={st.color} ref={colorRef}>
      <input
        className={st.input}
        type='radio'
        name='color'
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check}
        onChange={handleColorChange}
      />

      <span className={st.colorCheck}></span>
    </label>
  );
};
