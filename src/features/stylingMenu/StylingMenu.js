
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBox,
  setBackground,
} from './stylingMenuSlice';
import styles from './StylingMenu.module.css';


export function StylingMenu() {
  const dispatch = useDispatch();
  const background = useSelector(selectBox);

  return (
    <div style={{background}} className={styles.menuController}>
      <input
        type="color"
        aria-label="Set background"
        value={background}
        onChange={e => dispatch(setBackground(e.target.value))}
        />
      {background}
    </div>
  )
}