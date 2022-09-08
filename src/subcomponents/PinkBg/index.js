import React from 'react'

export default function PinkBg({ light, style = {} }) {
  return (
    <img
      src={`/assets/images/ellipse${light ? "-light" : ""}.png`}
      alt="Lion Pink Bg"
      style={{position: "absolute", opacity: light ? 1 : .6, ...style}}
    />
  )
}
