import React from 'react';
import './Questions.css';
import { ASKED_QUESTIONS } from '../../utils/consts';
import Question from '../Question/Question';

function Questions() {
  return (
    <section className='questions' aria-label='Questions'>
      <h2 className='questions__title'>Frequently Asked Questions</h2>

      <ul className='questions__list'>
        {ASKED_QUESTIONS.map((item) => (
          <Question key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default Questions;
