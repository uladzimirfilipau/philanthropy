import React from 'react';
import './Home.css';
import Lead from '../Lead/Lead';
import AboutUs from '../AboutUs/AboutUs';
import ResultsHome from '../ResultsHome/ResultsHome';
import Video from '../Video/Video';
import Help from '../Help/Help';
import Testimonials from '../Testimonials/Testimonials';
import News from '../News/News';

function Home() {
  return (
    <main className='main'>
      <Lead />
      <AboutUs />
      <ResultsHome />
      <Video />
      <Help />
      <Testimonials />
      <News />
    </main>
  );
}

export default Home;
