import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { footer_links } from 'data';
import "./index.css"
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const notHomePage = location?.pathname !== "/";

  return (
    <>
      <footer className='footer' style={notHomePage ? { background: "var(--pink-text)", color: "#136A61" } : {}}>
        <div className="container footer__items">
          <div className='footer__item'>
            <Link to="/">
              <img src={`/assets/images/logo.png`} alt="Lion Logo" className='footer__logo' />
            </Link>
            <p className='footer__text' style={notHomePage ? { opacity: 1 } : {}}>
              Quo is the most easier way for transaction
              with your friends and family, No matter where are you.
              An exceptional way for make your life one step easier.
            </p>
            <div className='footer__social-items'>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className='footer__social-item'>
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
          {footer_links.map((link, i) => (
            <div key={i} className='footer__item'>
              <h4 className='footer__item-title'>{link.title}</h4>
              <div className='footer__item-links'>
                {link.links.map((linkItem, idx) => (
                  <p className='footer__item-link' key={idx}>{linkItem.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
      <div className='footer__copyright'>
        <p className='footer__copyright-text'>Lion <span>Abba Media</span>, <span>Abba Coding</span></p>
      </div>
    </>
  )
}