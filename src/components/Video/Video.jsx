import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';
import backgroundImage from '../../images/video-image.png';
import playIcon from '../../images/video-play-icon.svg';
import ButtonAbout from '../ButtonAbout/ButtonAbout';
import { buttonLeadText } from '../../utils/consts';

function Video() {
  return (
    <section className='video'>
      <p className='video__subtitle'>Take a look at our video</p>
      <h2 className='video__title'>We have helped over 200 vulnerable communities worldwide</h2>

      <ul className='video__links'>
        <li>
          <Link to='/donate' className='video__link '>
            Donate now
          </Link>
        </li>
        <li>
          <ButtonAbout buttonText={buttonLeadText} />
        </li>
      </ul>

      <a
        href='https://www.youtube.com/watch?v=xHegpKx61eE'
        target='_blank'
        rel='noopener noreferrer'
        className='video__container'
      >
        <img src={playIcon} alt='Play icon' className='video__play-icon' />
        <img src={backgroundImage} alt='Video' className='video__image' />
      </a>

      <ul className='video__articles'>
        <li className='video__article'>
          <h3 className='video__article-title'>The goal and mission behind</h3>
          <p className='video__article-text'>
            Cursus metus aliquam eleifend mi in nulla posuere faucibus interdum posuere lorem ipsum
            dolor sit amet hendrerit dolor magna eget est lorem. Auctor urna nunc id cursus metus
            aliquam eleifend. Dictumst quisque sagittis purus sit amet volutpat consequa.
          </p>
        </li>

        <li className='video__article'>
          <h3 className='video__article-title'>How our charity got started</h3>
          <p className='video__article-text'>
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada
            fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla
            posuere sollicitudin pretium aenean pharetra magna ac placerat.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Video;
