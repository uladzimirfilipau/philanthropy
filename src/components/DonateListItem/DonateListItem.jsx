import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DonateListItem.css';

function DonateListItem({ title }) {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(!isHovering);
  };

  const onMouseLeave = () => {
    setIsHovering(!isHovering);
  };

  const itemClassName = `donate__list-item ${isHovering && 'donate__list-item_active'}`;
  const titleClassName = `donate__item-title ${isHovering && 'donate__item-title_active'}`;

  return (
    <li className={itemClassName}>
      <h2 className={titleClassName}>{title}</h2>
      <p className='donate__item-text'>
        Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port
        titor sit males dolor sit.
      </p>
      <Link
        to='/donate-single'
        className='donate__item-button'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Donate now
      </Link>
    </li>
  );
}

export default DonateListItem;
