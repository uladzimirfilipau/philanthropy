import React from 'react';
import './Message.css';
import facebookIcon from '../../images/icon-facebook.png';
import twitterIcon from '../../images/icon-twitter.png';
import instagramIcon from '../../images/icon-instagram.png';
import linkedInIcon from '../../images/icon-linkedin.png';
import youTubeIcon from '../../images/icon-youtube.png';
import whatsAppIcon from '../../images/icon-whatsapp.png';

function Message() {
  return (
    <section className='message' aria-label='Send message form'>
      <article className='message__article'>
        <h2 className='message__title'>Send us a message</h2>
        <p className='message__text'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nullam vulputate molestie
          ullamcorper quam id adipiscing ac phasellus lacinia et felis sit massa digni.
        </p>

        <h3 className='message__subtitle'>Follow us on social media</h3>
        <ul className='message__links'>
          <li className='message__item'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='message__link'
            >
              <img src={facebookIcon} alt='Facebook' className='message__image' />
            </a>
          </li>
          <li className='message__item'>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='message__link'
            >
              <img src={twitterIcon} alt='Twitter' className='message__image' />
            </a>
          </li>
          <li className='message__item'>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='message__link'
            >
              <img src={instagramIcon} alt='Instagram' className='message__image' />
            </a>
          </li>
          <li className='message__item'>
            <a
              href='https://www.linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='message__link'
            >
              <img src={linkedInIcon} alt='LinkedIn' className='message__image' />
            </a>
          </li>
          <li className='message__item'>
            <a
              href='https://www.youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='message__link'
            >
              <img src={youTubeIcon} alt='YouTube' className='message__image' />
            </a>
          </li>
          <li className='message__item'>
            <a
              href='https://www.whatsapp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='message__link'
            >
              <img src={whatsAppIcon} alt='WhatsApp' className='message__image' />
            </a>
          </li>
        </ul>
      </article>

      <form className='message__form'>
        <label htmlFor='name' className='message__form-label message__name'>
          Name
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Firstname Lastname'
            maxLength={30}
            required
            className='message__form-input'
          />
        </label>

        <label htmlFor='email' className='message__form-label message__email'>
          Email
          <input
            type='email'
            name='email'
            placeholder='your@mail.com'
            maxLength={30}
            required
            className='message__form-input'
          />
        </label>

        <label htmlFor='tel' className='message__form-label message__tel'>
          Phone
          <input
            type='tel'
            name='tel'
            placeholder='+0 (123) 456-78-90'
            maxLength={10}
            required
            className='message__form-input'
          />
        </label>

        <label htmlFor='subject' className='message__form-label message__subject'>
          Subject
          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='ex. Donation'
            maxLength={20}
            required
            className='message__form-input'
          />
        </label>

        <label htmlFor='message' className='message__form-label message__form-label_message'>
          Message
          <textarea
            type='text'
            name='message'
            id='message'
            placeholder='Please type your message here...'
            maxLength={300}
            className='message__form-input message__form-input_message'
          />
        </label>

        <button type='submit' className='message__form-button'>
          Submit Message
        </button>
      </form>
    </section>
  );
}

export default Message;
