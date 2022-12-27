import React from 'react';
import './Main.css';
import Lead from '../Lead/Lead';
import AboutUs from '../AboutUs/AboutUs';
import Results from '../Results/Results';
import Video from '../Video/Video';
import Help from '../Help/Help';
import Testimonials from '../Testimonials/Testimonials';
import News from '../News/News';

function Main() {
  return (
    <main className='main'>
      <Lead />
      <AboutUs />
      <Results />
      <Video />
      <Help />
      <Testimonials />
      <News />
    </main>
  );
}

export default Main;
