import { useEffect, useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import BurgerButton from '../BurgerButton/BurgerButton';
import DonateButton from '../DonateButton/DonateButton';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { MEDIUM_SCREEN } from '../../utils/consts';

function Header({ handleOpenMenu }) {
  const width = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    width > MEDIUM_SCREEN ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <header className='header'>
      <Logo />
      {isMobile && <Navigation />}
      {isMobile && <DonateButton />}
      <BurgerButton handleOpenMenu={handleOpenMenu} />
    </header>
  );
}

export default Header;
