import { useEffect, useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import BurgerButton from '../BurgerButton/BurgerButton';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { MEDIUM_SCREEN } from '../../utils/consts';
import { Link } from 'react-router-dom';

function Header({ handleOpenMenu }) {
  const width = useWindowWidth();
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    width <= MEDIUM_SCREEN ? setShowLinks(false) : setShowLinks(true);
  }, [width]);

  return (
    <header className='header'>
      <section className='header__container' aria-label='Navigation Links'>
        <Logo />
        {showLinks && <Navigation />}
        {showLinks && (
          <Link to='/donate' className='header__link'>
            Donate now
          </Link>
        )}
        <BurgerButton handleOpenMenu={handleOpenMenu} />
      </section>
    </header>
  );
}

export default Header;
