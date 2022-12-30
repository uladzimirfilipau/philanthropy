import React from 'react';
import './Story.css';
import image02 from '../../images/about-02.jpeg';

function Story() {
  return (
    <section className='story'>
      <img src={image02} alt='A small child in the arms of a woman' className='story__image' />
      <article className='story__article'>
        <h2 className='story__title'>Our story</h2>
        <h3 className='story__subtitle'>Take a look at the big impact we have done</h3>
        <p className='story__text'>
          Lorem ipsum dolor sit amet, consectetur{' '}
          <span className='story__text-span'>adipiscing</span> elit lobortis arcu enim urna
          adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi
          curabitur etiam nibh justo, lorem alique.
        </p>
        <p className='story__text'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </article>
    </section>
  );
}

export default Story;
