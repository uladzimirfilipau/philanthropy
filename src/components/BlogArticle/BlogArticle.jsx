import React from 'react';
import './BlogArticle.css';
import { Link } from 'react-router-dom';

function BlogArticle({ news, image }) {
  return (
    <main className='main'>
      <section className='article'>
        <figure className='article__figure'>
          <Link to='/articles' className='article__link'>
            {news.BUTTON_TEXT}
          </Link>
          <figcaption className='article__date'>{news.DATE}</figcaption>
        </figure>

        <h1 className='article__title'>{news.TITLE}</h1>
        <p className='article__description'>
          Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port
          titor sit males dolor sit.
        </p>

        <img src={image} alt={news.IMAGE_ALT} className='article__image' />
      </section>

      <section className='article article__subtitles'>
        <h2 className='article__subtitle'>Ways to support charities without donating money</h2>
        <p className='article__text'>
          Lorem ipsum dolor sit amet, consectetur{' '}
          <span className='article__text-span'>adipiscing</span> elit lobortis arcu enim urna
          adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi
          curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.
        </p>

        <ol className='article__list-decimal'>
          <li className='article__item'>
            Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
          </li>
          <li className='article__item'>
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent i
          </li>
          <li className='article__item'>
            Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
          </li>
          <li className='article__item'>
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti
          </li>
        </ol>

        <h3 className='article__subtitle-h3'>Volunteer your time</h3>
        <p className='article__text'>
          Vitae congue eu consequat ac felis placerat{' '}
          <span className='article__text-span'>vestibulum lectus</span> mauris ultrices cursus sit
          amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere
          praesent tristique magna sit amet purus gravida quis blandit turpis.
        </p>

        <h4 className='article__subtitle-h4'>Donate your time and skills</h4>
        <p className='article__text'>
          At risus viverra adipiscing at in tellus integer feugiat nisl pretium fusce id velit ut
          tortor sagittis orci a scelerisque purus semper eget at lectus urna duis convallis. porta
          nibh venenatis cras sed felis eget neque laoreet suspendisse interdum consectetur libero
          id faucibus nisl donec pretium vulputate sapien nec sagittis aliquam nunc lobortis mattis
          aliquam faucibus purus in.
        </p>

        <ul className='article__list-disc'>
          <li className='article__item'>
            Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor dolor sit amet
          </li>
          <li className='article__item'>
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti
          </li>
          <li className='article__item'>
            Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
          </li>
          <li className='article__item'>
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti
          </li>
        </ul>

        <h5 className='article__subtitle-h5'>Help to raise funds or organize a drive</h5>
        <p className='article__text article__text_margin-0'>
          Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis{' '}
          <span className='article__text-span'>gravida neque</span>. Velit euismod in pellentesque
          massa placerat volutpat lacus laoreet non curabitur gravida odio aenean sed adipiscing
          diam donec adipiscing tristique risus. amet est placerat in egestas erat imperdiet sed
          euismod nisi.
        </p>

        <blockquote className='article__blockquote'>
          “Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis gravida neque
          velit euismod in pellentesque massa placerat”
        </blockquote>

        <h6 className='article__subtitle-h6'>
          Donate your tax refund or donate your credit card rewards
        </h6>
        <p className='article__text'>
          Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec et odio pellentesque
          diam volutpat commodo sed egestas aliquam sem fringilla ut morbi tincidunt augue interdum
          velit euismod eu tincidunt tortor aliquam nulla facilisi aenean sed adipiscing diam donec
          adipiscing ut lectus arcu bibendum at varius vel pharetra nibh venenatis cras sed felis
          eget dolor cosnectur drolo.
        </p>
      </section>
    </main>
  );
}

export default BlogArticle;
