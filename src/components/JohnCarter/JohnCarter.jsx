import React from 'react';
import './JohnCarter.css';
import johnCarter from '../../images/about-leader-02.jpeg';
import facebookIcon from '../../images/icon-facebook.png';
import twitterIcon from '../../images/icon-twitter.png';
import instagramIcon from '../../images/icon-instagram.png';
import linkedInIcon from '../../images/icon-linkedin.png';

function JohnCarter() {
  return (
    <main className='main'>
      <section className='leader'>
        <img src={johnCarter} alt='John Carter' className='leader__image' />
        <h1 className='leader__title'>John Carter</h1>

        <ul className='leader__links'>
          <li className='leader__item'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='leader__link'
            >
              <img src={facebookIcon} alt='Facebook' className='leader__link-image' />
            </a>
          </li>
          <li className='leader__item'>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='leader__link'
            >
              <img src={twitterIcon} alt='Twitter' className='leader__link-image' />
            </a>
          </li>
          <li className='leader__item'>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='leader__link'
            >
              <img src={instagramIcon} alt='Instagram' className='leader__link-image' />
            </a>
          </li>
          <li className='leader__item'>
            <a
              href='https://www.linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='leader__link'
            >
              <img src={linkedInIcon} alt='LinkedIn' className='leader__link-image' />
            </a>
          </li>
        </ul>

        <article className='leader__article'>
          <h2 className='leader__article-subtitle'>About John Carter</h2>
          <p className='leader__article-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p className='leader__article-text'>
            Sapien faucibus et molestie ac feugiat sed lectus. Lorem sed risus ultricies tristique.
            Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Enim praesent elementum
            facilisis leo. Consectetur a erat nam at lectus urna.
          </p>
          <ul className='leader__article-list'>
            <li className='leader__article-item'>Cras sed felis eget velit aliquet.</li>
            <li className='leader__article-item'>Pharetra vel turpis nunc eget lorem dolor.</li>
            <li className='leader__article-item'>
              Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
            </li>
          </ul>
          <p className='leader__article-text'>
            Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed adipiscing diam
            donec adipiscing. Nibh tellus molestie nunc non blandit massa enim nec. Ac feugiat sed
            lectus vestibulum mattis ullamcorper velit. Posuere morbi leo urna molestie.
          </p>
        </article>
      </section>
    </main>
  );
}

export default JohnCarter;
