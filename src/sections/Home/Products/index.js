import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { homeproducts } from 'data'
import React from 'react'
import SliderBtn from 'subcomponents/SliderBtn';
import "./index.css";

const splideOpts = {
  rewind: true,
  loop: true,
  pagination: false,
  perPage: 3,
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

export default function HomeProducts() {
  return (
    <section className='homeproducts'>
      <div className="container">
        <h3 className="section__title homeproducts__title">
          Наши продукты
        </h3>
        <div className='homeproducts__wrapper'>
          <Splide hasTrack={false} options={splideOpts}>
            <div className="splide__arrows splide__arrows--ltr">
              <SliderBtn
                isPrev
                style={{ transform: `translateY(-50%) rotate(180deg) !important` }}
                className="splide__arrow--prev slide-prev-transforms"
              />
              <SliderBtn
                attrs={{
                  "aria-label": "Next slide", "aria-controls": "splide01-track",
                  type: "button"
                }}
                className="splide__arrow--next"
              />
            </div>
            <SplideTrack>
              {homeproducts.map((prd, i) => (
                <SplideSlide key={i}>
                  <div className='homeproducts__product'>
                    <img
                      src={prd.image_url}
                      alt={prd.name}
                      className="homeproducts__product-img"
                    />
                    <p className='homeproducts__product-name'>{prd.name}</p>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </section>
  )
}
