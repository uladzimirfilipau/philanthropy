import React from 'react';
import './Main.css';
import Lead from '../Lead/Lead';
import AboutUs from '../AboutUs/AboutUs';
import Results from '../Results/Results';
import Video from '../Video/Video';

function Main() {
  return (
    <main className='main'>
      <Lead />
      <AboutUs />
      <Results />
      <Video />
    </main>
  );
}

export default Main;
