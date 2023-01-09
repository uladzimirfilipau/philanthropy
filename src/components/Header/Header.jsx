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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    width > MEDIUM_SCREEN ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <header className='header'>
      <section className='header__container' aria-label='Navigation Links'>
        <Logo />
        {isMobile && <Navigation />}
        {isMobile && (
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
