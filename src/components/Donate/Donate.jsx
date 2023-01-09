import React from 'react';
import { Link } from 'react-router-dom';
import './Donate.css';

function Donate() {
  return (
    <main className='main'>
      <section className='donate' aria-label='Donate'>
        <article className='donate__article'>
          <span className='donate__line' />
          <h1 className='donate__title'>Donate to our cause</h1>
          <p className='donate__text'>
            Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port
            titor sit males dolor sitolmom drogk.
          </p>
        </article>

        <ul className='donate__list'>
          <li className='donate__list-item'>
            <h2 className='donate__item-title'>$1.00 usd</h2>
            <p className='donate__item-text'>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac
              port titor sit males dolor sit.
            </p>
            <Link className='donate__item-button'>Donate now</Link>
          </li>
          <li className='donate__list-item'>
            <h2 className='donate__item-title'>$5.00 usd</h2>
            <p className='donate__item-text'>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac
              port titor sit males dolor sit.
            </p>
            <Link className='donate__item-button'>Donate now</Link>
          </li>
          <li className='donate__list-item'>
            <h2 className='donate__item-title'>$10.00 usd</h2>
            <p className='donate__item-text'>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac
              port titor sit males dolor sit.
            </p>
            <Link className='donate__item-button'>Donate now</Link>
          </li>
          <li className='donate__list-item'>
            <h2 className='donate__item-title'>Custom amount</h2>
            <p className='donate__item-text'>
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac
              port titor sit males dolor sit.
            </p>
            <Link className='donate__item-button'>Donate now</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Donate;
