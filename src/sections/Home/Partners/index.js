import { partners } from 'data';
import React from 'react'
import "./index.css";

export default function HomePartners() {
  return (
    <section className="homepartners">
      <h2 className="homepartners__title section__title">Нам доверяли</h2>
      <div className='homepartners__logos'>
        {partners.map((partner, i) => (
          <img
            key={i}
            src={partner}
            alt="Lion Partner"
            className='homepartners__logo'
          />
        ))}
      </div>
    </section>
  )
}
