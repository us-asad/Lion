import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import "./index.css"

export default function SliderBtn({ onClick = Function.prototype, className, isPrev}) {

  return (
    <button onClick={onClick} className={`slides-btn slides-${isPrev ? "prev" : "next"} ${className}`}>
      {isPrev ? <BiChevronLeft /> : <BiChevronRight />}
    </button>
  )
}
