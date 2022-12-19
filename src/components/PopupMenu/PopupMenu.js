import { useEffect, useState } from 'react';
import './PopupMenu.css';
import CloseButton from '../CloseButton/CloseButton';
import Navigation from '../Navigation/Navigation';
import DonateButton from '../DonateButton/DonateButton';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { MEDIUM_SCREEN } from '../../utils/consts';

function PopupMenu({ isOpen, onClose }) {
  const width = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    width <= MEDIUM_SCREEN ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <>
      {isMobile && (
        <section className={`popup-menu ${isOpen && 'popup-menu_opened'}`}>
          <CloseButton onClose={onClose} />
          <Navigation />
          <DonateButton />
        </section>
      )}
    </>
  );
}

export default PopupMenu;
