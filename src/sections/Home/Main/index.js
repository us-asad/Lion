import { SplideSlide } from '@splidejs/react-splide';
import { SplideSlider } from 'components';
import { homemain_slides } from 'data';
import React from 'react'
import "./index.css";

const splideOpts = {
  rewind: true,
  loop: true,
  pagination: false,
  perPage: 4,
  perMove: 1,
  breakpoints: {
    1000: {
      perPage: 2
    },
    700: {
      perPage: 1
    }
  }
}

export default function HomeMain() {
  return (
    <div className='homemain'>
      <div className='homemain__slides'>
        <SplideSlider options={splideOpts}>
          {homemain_slides.map((slide, i) => (
          <SplideSlide key={i}>
            <div key={i} className='homemain__slide'>
              <img src={slide} alt="Lion Slide" className='homemain__slide-img' />
            </div> 
          </SplideSlide>
          ))}
        </SplideSlider>
        {/* {homemain_slides.map((slide, i) => (
          <div key={i} className='homemain__slide'>
            <img src={slide} alt="Lion Slide" className='homemain__slide-img' />
          </div>
        ))}
        <SliderBtn
          isPrev
        />
        <SliderBtn /> */}
      </div>
    </div>
  )
}
