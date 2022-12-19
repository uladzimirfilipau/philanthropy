import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Pages from '../Pages/Pages';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';

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
      <Header handleOpenMenu={handleOpenMenu} />
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/pages' component={Pages}></Route>
        <Route path='*' component={PageNotFound} />
      </Switch>
      <Footer />

      <PopupMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default App;
