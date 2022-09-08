import { nav_items } from 'data';
import React from 'react'
import "./index.css";

export default function Header() {
  return (
    <header className='header'>
      <div className='container px-normal'>
        <div className='header__items-wrapper'>
          <img src="/assets/images/logo.png" alt="Lion logo" className='header__logo' />
          <ul className='header__links'>
            {nav_items.map((item, i) => (
              <li key={i} className='header__link'>
                {item}
              </li>
            ))}
          </ul>
          <button className='header__btn'>+998 99 559 53 53</button>
        </div>
      </div>
    </header>
  )
}
