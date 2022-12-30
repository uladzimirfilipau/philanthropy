import React from 'react';
import './About.css';
import Charity from '../Charity/Charity';
import Result from '../Result/Result';
import Story from '../Story/Story';

function About() {
  return (
    <main className='main'>
      <Charity />
      <Result />
      <Story />
    </main>
  );
}

export default About;
