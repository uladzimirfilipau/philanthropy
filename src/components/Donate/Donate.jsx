import React from 'react';
import DonateListItem from '../DonateListItem/DonateListItem';
import { donateListTitles } from '../../utils/consts';
import './Donate.css';

function Donate() {
  const listItems = donateListTitles.map((title) => <DonateListItem key={title} title={title} />);

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

        <ul className='donate__list'>{listItems}</ul>
      </section>
    </main>
  );
}

export default Donate;
