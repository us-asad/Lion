import React from 'react'
import "./index.css";

export default function Contact() {
  const submit = e => {
    e.preventDefault();
  }
  
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__left">
          <h2 className="contact__left-title section__title">Eсть какие нибудь вопросы?</h2>
          <form onSubmit={submit} className="contact__form">
            <input
              type="text"
              name='name'
              placeholder='Имя'
              minLength={2}
              maxLength={1000}
              className='contact__form-input'
            />
            <input
              type="number"
              name='name'
              placeholder='ТЕЛЕФОН НОМЕР'
              className='contact__form-input'
            />
            <button className='contact__form-btn'>ОТПРАВИТЬ</button>
          </form>
        </div>
        <div className="contact__right">
          <img
            src="/assets/images/contact-img.png"
            alt="Lion Contact"
            className='contact__right-img'
          />
          <img
            src="/assets/images/contact-icon.png"
            alt="Lion Contact"
            className='contact__right-icon about__left-video-btn'
          />
        </div>
      </div>
    </section>
  )
}
