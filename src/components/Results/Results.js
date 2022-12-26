import React from 'react';
import './Results.css';
import resultsImage from '../../images/results-image.png';
import litersOfWater from '../../images/results-litersOfWater.svg';
import housesBuilt from '../../images/results-housesBuilt.svg';
import toysDelivered from '../../images/results-toysDelivered.svg';
import schoolsBuilt from '../../images/results-schoolsBuilt.svg';
import { Link } from 'react-router-dom';

function Results() {
  return (
    <section className='results'>
      <article className='results__article'>
        <h2 className='results__title'>Our Results</h2>
        <h3 className='results__subtitle'>Take a look at the big impact we have done</h3>

        <ul className='results__table'>
          <li className='results__table-cell'>
            <img src={litersOfWater} alt='Liters of water' className='results__table-image' />
            <h4 className='results__cell-title'>500m</h4>
            <p className='results__cell-text'>Liters of water</p>
          </li>

          <li className='results__table-cell'>
            <img src={housesBuilt} alt='Houses built' className='results__table-image' />
            <h4 className='results__cell-title'>7000+</h4>
            <p className='results__cell-text'>Houses built</p>
          </li>

          <li className='results__table-cell'>
            <img src={toysDelivered} alt='Toys delivered' className='results__table-image' />
            <h4 className='results__cell-title'>10000+</h4>
            <p className='results__cell-text'>Toys delivered</p>
          </li>

          <li className='results__table-cell'>
            <img src={schoolsBuilt} alt='Schools built' className='results__table-image' />
            <h4 className='results__cell-title'>2000+</h4>
            <p className='results__cell-text'>Schools built</p>
          </li>
        </ul>

        <Link to='/donate' className='results__link'>
          Donate now
        </Link>
      </article>

      <img
        src={resultsImage}
        alt='A child at the table in the classroom'
        className='results__image'
      />
    </section>
  );
}

export default Results;