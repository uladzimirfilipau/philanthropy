import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import { BUTTON } from '../../utils/consts';
import { OrangeButton } from '../Button/Button';
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
        <ButtonLink link={BUTTON.LINK.HOME} text={BUTTON.TEXT.HOME} Button={OrangeButton} />
      </section>
    </main>
  );
}

export default PageNotFound;
