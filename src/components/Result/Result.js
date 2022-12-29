import React from 'react';
import './Result.css';

function Result() {
  return (
    <section className='result'>
      <h2 className='result__title'>Our results</h2>
      <h3 className='result__subtitle'>Take a look at the big impact we have done</h3>

      <ul className='aboutus__table result__table'>
        <li className='aboutus__table-cell'>
          <p className='aboutus__cell-title'>
            200<span className='aboutus__cell-letter'>m</span>
          </p>
          <p className='aboutus__cell-text'>Humans impacted</p>
        </li>
        <li className='aboutus__table-cell'>
          <p className='aboutus__cell-title'>
            50<span className='aboutus__cell-letter'>k</span>
          </p>
          <p className='aboutus__cell-text'>Collaborators</p>
        </li>
        <li className='aboutus__table-cell'>
          <p className='aboutus__cell-title'>
            370<span className='aboutus__cell-letter'>k</span>
          </p>
          <p className='aboutus__cell-text'>Donations</p>
        </li>
        <li className='aboutus__table-cell'>
          <p className='aboutus__cell-title'>
            100<span className='aboutus__cell-letter'>+</span>
          </p>
          <p className='aboutus__cell-text'>Assisted communities</p>
        </li>
      </ul>
    </section>
  );
}

export default Result;
