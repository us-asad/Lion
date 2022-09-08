import { SplideSlide } from '@splidejs/react-splide'
import { SplideSlider } from 'components'
import { homeproducts } from 'data'
import React from 'react'
import "./index.css";

export default function HomeBlog() {
  return (
    <section className="homeblog">
      <div className="container">
        <h2 className="section__title homeblog__title">Новости Лиона</h2>
        <div className='homeproducts__wrapper'>
          <SplideSlider>
            {homeproducts.map((prd, i) => (
              <SplideSlide key={i}>
                <div className='homeproducts__product blog__item'>
                  <img
                    src={prd.image_url}
                    alt={prd.name}
                    className="homeproducts__product-img blog__item-img"
                  />
                  <p className='homeproducts__product-name'>{prd.name}</p>
                </div>
              </SplideSlide>
            ))}
          </SplideSlider>
        </div>
      </div>
    </section>
  )
}
