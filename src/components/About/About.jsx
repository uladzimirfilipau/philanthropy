import React from 'react';
import './About.css';
import Charity from '../Charity/Charity';
import ResultsAbout from '../ResultsAbout/ResultsAbout';
import Story from '../Story/Story';
import Mission from '../Mission/Mission';
import Leaders from '../Leaders/Leaders';
import Partners from '../Partners/Partners';

function About() {
  return (
    <main className='main'>
      <Charity />
      <ResultsAbout />
      <Story />
      <Mission />
      <Leaders />
      <Partners />
    </main>
  );
}

export default About;
