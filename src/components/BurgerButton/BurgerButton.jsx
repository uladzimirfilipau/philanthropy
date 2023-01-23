import React from 'react';
import { Button, Span } from './Styled';

function BurgerButton({ handleOpenMenu }) {
  return (
    <Button onClick={handleOpenMenu}>
      <Span />
    </Button>
  );
}

export default BurgerButton;
