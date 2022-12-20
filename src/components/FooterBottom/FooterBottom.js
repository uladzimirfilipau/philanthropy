import React from 'react';
import './FooterBottom.css';

function FooterBottom() {
  return (
    <section className='footer__bottom'>
      <p className='footer__copyright'>
        Copyright © Philanthropy X | Designed by&nbsp;
        <a href='https://brixtemplates.com/' className='footer__copyright-link'>
          BRIX Templates
        </a>
        &nbsp;| Powered by&nbsp;
        <a href='https://github.com/uladzimirfilipau' className='footer__copyright-link'>
          Uladzimir Filipau
        </a>
      </p>

      <ul className='footer__social-links'>
        <li className='footer__social-link'></li>
        <li className='footer__social-link'></li>
        <li className='footer__social-link'></li>
        <li className='footer__social-link'></li>
        <li className='footer__social-link'></li>
        <li className='footer__social-link'></li>
      </ul>
    </section>
  );
}

export default FooterBottom;
