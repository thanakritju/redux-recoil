
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectColor,
  setColor,
} from './stylingMenuSlice';
import styles from './StylingMenu.module.css';


export function StylingMenu() {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);

  return (
    <div style={{background: color}} className={styles.menuController}>
      <input
        type="color"
        aria-label="Set background"
        value={color}
        onChange={e => dispatch(setColor(e.target.value))}
        />
      {color}
    </div>
  )
}