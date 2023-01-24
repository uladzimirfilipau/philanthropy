import { useEffect, useState } from 'react';
import './PopupMenu.css';
import CloseButton from '../CloseButton/CloseButton';
import Navigation from '../Navigation/Navigation';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { MEDIUM_SCREEN } from '../../utils/consts';
import { Link } from 'react-router-dom';

function PopupMenu({ isOpen, onClose }) {
  const width = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);
  const popupMenuClassName = `popup-menu ${isOpen && 'popup-menu_opened'}`;

  useEffect(() => {
    width <= MEDIUM_SCREEN ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <>
      {isMobile && (
        <section className={popupMenuClassName}>
          <CloseButton onClose={onClose} />
          <Navigation onClose={onClose} isMobile={isMobile} />
          <Link to='/donate' className='header__link' onClick={onClose}>
            Donate now
          </Link>
        </section>
      )}
    </>
  );
}

export default PopupMenu;
