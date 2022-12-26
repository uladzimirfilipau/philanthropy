import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <main className='main'>
      <section className='notfound'>
        <h1 className='notfound__title'>404</h1>
        <h2 className='notfound__subtitle'>Oops, page not found!</h2>
        <p className='notfound__text'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur cepteur
        </p>
        <Link to='/' className='notfound__link'>
          Go home
        </Link>
      </section>
    </main>
  );
}

export default PageNotFound;
