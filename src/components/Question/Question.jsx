import { useState } from 'react';
import './Question.css';

function Question({ item }) {
  const [showText, setShowText] = useState(false);

  const toggleClick = () => {
    setShowText(!showText);
  };

  const buttonClassName = `questions__button ${showText && 'questions__button_active'}`;
  const buttonTextClassName = `questions__button-text ${
    showText && 'questions__button-text_active'
  }`;

  return (
    <li className='questions__item' onClick={toggleClick}>
      <button type='button' className={buttonClassName}>
        <span className={buttonTextClassName}>+</span>
      </button>
      <article className='questions__article'>
        <h3 className='questions__subtitle'>{item.subtitle}</h3>
        {showText && <p className='questions__text'>{item.text}</p>}
      </article>
    </li>
  );
}

export default Question;
