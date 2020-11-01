import { useSelector } from 'react-redux';
import {
  selectHeight,
  selectWidth,
} from './canvasSlice';
import {
  selectColor,
} from '../stylingMenu/stylingMenuSlice';
import styles from './Canvas.module.css';

export function Canvas() {
  const color = useSelector(selectColor);

  return (
    <canvas style={{borderColor: color}} className={styles.canvas} width={useSelector(selectWidth)} height={useSelector(selectHeight)} />
  )
}