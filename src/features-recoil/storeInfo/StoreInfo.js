import React from 'react';
import { JsonTable } from 'react-json-to-html';
import {
  useRecoilValue,
} from 'recoil';
import { stylingMenuColorState } from '../stylingMenu/stylingState';

export function StoreInfo() {
  const color = useRecoilValue(stylingMenuColorState);

  return (
    <JsonTable json={
      {
        color: color,
      }
    }/>
  )
}