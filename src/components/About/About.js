import React from 'react';
import './About.css';

import Charity from '../Charity/Charity';
import Result from '../Result/Result';
import Story from '../Story/Story';
import Mission from '../Mission/Mission';
import Leaders from '../Leaders/Leaders';

function About() {
  return (
    <main className='main'>
      <Charity />
      <Result />
      <Story />
      <Mission />
      <Leaders />
    </main>
  );
}

export default About;
