import React from 'react';
import './ResultsHome.css';
import resultsImage from '../../images/results-image.png';
import litersOfWater from '../../images/results-litersOfWater.svg';
import housesBuilt from '../../images/results-housesBuilt.svg';
import toysDelivered from '../../images/results-toysDelivered.svg';
import schoolsBuilt from '../../images/results-schoolsBuilt.svg';
import { BUTTON } from '../../utils/consts';
import { OrangeButton } from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';

function ResultsHome() {
  return (
    <section className='results'>
      <article className='results__article'>
        <p className='results__subtitle'>Our Results</p>
        <h2 className='results__title'>Take a look at the big impact we have done</h2>

        <ul className='results__table'>
          <li className='results__table-cell'>
            <img src={litersOfWater} alt='Liters of water' className='results__table-image' />
            <p className='results__cell-title'>500m</p>
            <p className='results__cell-text'>Liters of water</p>
          </li>

          <li className='results__table-cell'>
            <img src={housesBuilt} alt='Houses built' className='results__table-image' />
            <p className='results__cell-title'>7000+</p>
            <p className='results__cell-text'>Houses built</p>
          </li>

          <li className='results__table-cell'>
            <img src={toysDelivered} alt='Toys delivered' className='results__table-image' />
            <p className='results__cell-title'>10000+</p>
            <p className='results__cell-text'>Toys delivered</p>
          </li>

          <li className='results__table-cell'>
            <img src={schoolsBuilt} alt='Schools built' className='results__table-image' />
            <p className='results__cell-title'>2000+</p>
            <p className='results__cell-text'>Schools built</p>
          </li>
        </ul>

        <ButtonLink link={BUTTON.LINK.DONATE} text={BUTTON.TEXT.DONATE} Button={OrangeButton} />
      </article>

      <img
        src={resultsImage}
        alt='A child at the table in the classroom'
        className='results__image'
      />
    </section>
  );
}

export default ResultsHome;
