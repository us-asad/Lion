import React from 'react'
import "./index.css";

export default function Line({ lineNum, style }) {
  return (
    <img
      src={`/assets/images/line-${lineNum}.png`}
      alt="Lion Line"
      className='line'
      style={style}
    />
  )
}
