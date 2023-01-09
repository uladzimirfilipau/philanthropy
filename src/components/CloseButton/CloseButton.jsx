import React from 'react';
import './CloseButton.css';

function CloseButton({ onClose }) {
  return <button type='button' aria-label='Close' className='close-button' onClick={onClose} />;
}

export default CloseButton;
