import { SplideSlide } from '@splidejs/react-splide';
import { SplideSlider } from 'components';
import { homemain_slides, main_slides } from 'data';
import React from 'react'
import { PinkBg } from 'subcomponents';
import { BsArrowRight } from "react-icons/bs"
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

const slideOptsMain = {
  rewind: true,
  loop: true,
  autoPlay: true,
  pagination: true,
  arrows: false
}

export default function HomeMain() {
  return (
    <div className='homemain'>
      <div className="container">
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
          <PinkBg style={{ top: "-600px", left: "-1000px" }} />
          <PinkBg style={{ top: "100px", left: "-1000px" }} />
          <PinkBg style={{ top: "100px", right: "-1000px" }} />
          <PinkBg style={{ top: "-600px", left: "400px" }} />
        </div>
        <div className='homemain__main'>
          <div className="homemain__content">
            <div>
              <h1 className='homemain__title'>ПРОИЗВОДСТВО ременей в Узбекистане</h1>
              <p className='homemain__text'>Оптовые цены и оптовые объёмы Большой ассортимент</p>
            </div>
            <button
              className='products__modal-btn product__modal-btn'
            >
              <span className='products__modal-btn-icon'>
                <BsArrowRight />
              </span>
              <span className='products__modal-btn-text'>Перейти в каталог</span>
            </button>
          </div>
          <div className='homemain__main-slider'>
            <SplideSlider
              className="slideOptsMain"
              options={slideOptsMain}
              items={main_slides}
            >
              {main_slides.map((slide, i) => (
                <SplideSlide key={i}>
                  <div key={i} className='homemain__main-slide'>
                    <img
                      src={slide.image_url}
                      alt="Lion Slide"
                      className='homemain__main-slide-img'
                    />
                    <p className='homemain__main-slide-text'>{slide.name}</p>
                  </div>
                </SplideSlide>
              ))}
            </SplideSlider>
            <PinkBg
              style={{top: "-300px", left: "-200px"}}
              light
            />
          </div>
        </div>
      </div>
    </div>
  )
}