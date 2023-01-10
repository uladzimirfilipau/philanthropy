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
import SophieMoore from '../SophieMoore/SophieMoore';
import JohnCarter from '../JohnCarter/JohnCarter';
import EmilyWeber from '../EmilyWeber/EmilyWeber';

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
        <Route path='/sophie-moore' component={SophieMoore} />
        <Route path='/john-carter' component={JohnCarter} />
        <Route path='/emily-weber' component={EmilyWeber} />
        <Route path='/donate' component={Donate} />
        <Route path='*' component={PageNotFound} />
      </Switch>
      <Footer />

      <ScrollUpButton />
      <PopupMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default App;
