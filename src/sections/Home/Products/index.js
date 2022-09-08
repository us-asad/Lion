import { SplideSlide } from '@splidejs/react-splide'
import { SplideSlider } from 'components';
import { homeproducts } from 'data'
import React from 'react'
import { PinkBg } from 'subcomponents';
import "./index.css";

export default function HomeProducts() {
  return (
    <section className='homeproducts'>
      <div className="container">
        <h3 className="section__title homeproducts__title">
          Наши продукты
        </h3>
        <div className='homeproducts__wrapper'>
          <SplideSlider>
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
          </SplideSlider>
        </div>
      </div>
      <PinkBg light style={{ top: "600px", left: "0px" }} />
      <PinkBg style={{ top: "1000px", right: "-800px" }} />
    </section>
  )
}
