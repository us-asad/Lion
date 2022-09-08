import { homemain_slides } from 'data';
import React from 'react'
import SliderBtn from 'subcomponents/SliderBtn';
import "./index.css";

export default function HomeMain() {
  return (
    <div className='homemain'>
      <div className='homemain__slides'>
        {homemain_slides.map((slide, i) => (
          <div key={i} className='homemain__slide'>
            <img src={slide} alt="Lion Slide" className='homemain__slide-img' />
          </div>
        ))}
        <SliderBtn
          isPrev
        />
        <SliderBtn />
      </div>
    </div>
  )
}
