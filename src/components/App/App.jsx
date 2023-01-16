import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Donate from '../Donate/Donate';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import PageNotFound from '../PageNotFound/PageNotFound';
import Leader from '../Leader/Leader';
import Contact from '../Contact/Contact';

import { LEADERS } from '../../utils/consts';
import sophieMoore from '../../images/about-leader-01.jpeg';
import johnCarter from '../../images/about-leader-02.jpeg';
import emilyWeber from '../../images/about-leader-03.jpeg';

import BlogArticle from '../BlogArticle/BlogArticle';
import { NEWS } from '../../utils/consts';
import newsFirstImage from '../../images/news-01.png';
import newsSecondImage from '../../images/news-02.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <Header handleOpenMenu={handleOpenMenu} onClose={handleCloseMenu} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />

        <Route path='/sophie-moore'>
          <Leader leader={LEADERS.SOPHIE_MOORE} image={sophieMoore} />
        </Route>
        <Route path='/john-carter'>
          <Leader leader={LEADERS.JOHN_CARTER} image={johnCarter} />
        </Route>
        <Route path='/emily-weber'>
          <Leader leader={LEADERS.EMILY_WEBER} image={emilyWeber} />
        </Route>

        <Route path={NEWS.FIRST_NEWS.LINK}>
          <BlogArticle news={NEWS.FIRST_NEWS} image={newsFirstImage} />
        </Route>
        <Route path={NEWS.SECOND_NEWS.LINK}>
          <BlogArticle news={NEWS.SECOND_NEWS} image={newsSecondImage} />
        </Route>

        <Route path='/donate' component={Donate} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={PageNotFound} />
      </Switch>
      <Footer />

      <ScrollUpButton />
      <PopupMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default App;
