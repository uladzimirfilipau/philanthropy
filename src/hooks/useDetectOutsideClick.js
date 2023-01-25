import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (element, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
};
