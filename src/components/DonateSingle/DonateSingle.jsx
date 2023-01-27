import { useEffect, useState } from 'react';
import './DonateSingle.css';
import { donateListTitles } from '../../utils/consts';

function DonateSingle() {
  const [labelValue, setLabelValue] = useState('$1.00 USD');
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (labelValue === 'Custom amount') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  }, [labelValue, showInput]);

  const handleSelect = (event) => {
    setLabelValue(event.target.value);
  };

  const openModal = () => {};

  const options = donateListTitles.map((value) => (
    <option className='single__form-option' key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <main className='main'>
      <section className='single' aria-label='Donate Single'>
        <article className='single__article'>
          <h1 className='single__title'>Donate $1 USD</h1>
          <p className='single__text'>
            Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port
            titor sit males dolor sit.
          </p>

          <ul className='single__list'>
            Why donating to our charity?
            <li className='single__list-item'>Help vulnerable communities</li>
            <li className='single__list-item'>Completely transparency on funds</li>
            <li className='single__list-item'>Make a difference in the world</li>
          </ul>
        </article>

        <form className='single__form'>
          <h2 className='single__form-title'>Donate to our cause</h2>
          <p className='single__form-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipisc
          </p>

          <label htmlFor='donate' className='single__form-label'>
            {labelValue}
          </label>
          <select
            className='single__form-select'
            id='donate'
            name='donate'
            onChange={handleSelect}
            defaultValue=''
            required
          >
            {options}
          </select>

          {showInput && (
            <label htmlFor='custom-donate' className='single__form-label single__form-label_direct'>
              <p className='single__form-paragraph'>$</p>
              <input
                type='number'
                id='custom-donate'
                name='custom-donate'
                min='1'
                max='100'
                defaultValue='1'
                className='single__form-input'
              />
              <p className='single__form-paragraph'>USD</p>
            </label>
          )}

          <button className='single__form-button' type='button' onClick={openModal}>
            Add to Cart
          </button>
        </form>
      </section>
    </main>
  );
}

export default DonateSingle;
