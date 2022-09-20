import { Splide, SplideTrack } from '@splidejs/react-splide'
import React from 'react'
import { SliderBtn } from 'subcomponents'

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

export default function SplideSlider({ options, children, items }) {
  return (
    <Splide
      hasTrack={false}
      options={options || splideOpts}
    >
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
        {children}
      </SplideTrack>
    </Splide>
  )
}
