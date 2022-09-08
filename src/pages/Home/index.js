import React from 'react'
import { HomeAbout, HomeBlog, HomeContact, HomeMain, HomePartners, HomeProduction, HomeProducts } from 'sections'

export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeProducts />
      <HomeAbout />
      <HomeBlog />
      <HomeProduction />
      <HomePartners />
      <HomeContact />
    </>
  )
}
