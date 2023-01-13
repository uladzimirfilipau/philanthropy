import { useState } from 'react';
import './Question.css';

function Question({ item }) {
  const [showText, setShowText] = useState(false);

  const toggleClick = () => {
    setShowText(!showText);
  };

  const buttonClassName = `questions__button ${showText && 'questions__button_active'}`;

  return (
    <li key={item.id} className='questions__item' onClick={toggleClick}>
      <button type='button' className={buttonClassName} />
      <article className='questions__article'>
        <h3 className='questions__subtitle'>{item.subtitle}</h3>
        {showText && <p className='questions__text'>{item.text}</p>}
      </article>
    </li>
  );
}

export default Question;
