import {
  useRecoilState,
} from 'recoil';

import styles from './StylingMenu.module.css';
import { stylingMenuColorState } from './stylingState';

export function StylingMenu() {
  const [color, setColor] = useRecoilState(stylingMenuColorState);

  return (
    <div style={{background: color}} className={styles.menuController}>
      <input
        type="color"
        aria-label="Set background"
        value={color}
        onChange={e => setColor(() => e.target.value)}
        />
      {color}
    </div>
  )
}