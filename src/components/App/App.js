import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';

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
      <ScrollUpButton />
      <Header handleOpenMenu={handleOpenMenu} />
      <Switch>
        <Route exact path='/' component={Main}></Route>
      </Switch>
      <Footer />

      <PopupMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default App;
