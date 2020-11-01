import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectHeight,
  selectWidth,
  selectCircles,
  addCircle,
} from './canvasSlice';
import {
  selectColor,
} from '../stylingMenu/stylingMenuSlice';
import styles from './Canvas.module.css';

export function Canvas() {
  const color = useSelector(selectColor);
  const circles = useSelector(selectCircles);
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    circles.forEach((circle, index) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI);
      ctx.fill();
      ctx.font = "20px Arial";
      ctx.fillStyle = "#000";
      ctx.fillText(index, circle.x, circle.y);
    })
  }

  const onClick = (event) => {
    const canvas = canvasRef.current;
    let x = event.pageX - canvas.offsetLeft; 
    let y = event.pageY - canvas.offsetTop; 
    dispatch(addCircle({x, y}))
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;
    
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw]);

  return (
    <canvas 
      style={{borderColor: color}} 
      className={styles.canvas} 
      ref={canvasRef} 
      width={useSelector(selectWidth)} 
      height={useSelector(selectHeight)} 
      onMouseDown={(e) => onClick(e)}
    />
  )
}