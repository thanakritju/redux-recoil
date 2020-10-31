
import React from 'react';
import { useSelector } from 'react-redux';
import {JsonTable} from 'react-json-to-html';

export function StoreInfo() {
  const allState = useSelector(state => state);

  return (
    <JsonTable json={allState}/>
  )
}