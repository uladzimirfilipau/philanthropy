import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Donate from '../Donate/Donate';
import DonateSingle from '../DonateSingle/DonateSingle';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import PageNotFound from '../PageNotFound/PageNotFound';
import { LEADERS } from '../../utils/consts';
import Leader from '../Leader/Leader';
import BlogArticle from '../BlogArticle/BlogArticle';
import { NEWS } from '../../utils/consts';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const leadersRoutes = LEADERS.map((item) => (
    <Route key={item.TITLE} exact path={item.LINK}>
      <Leader item={item} />
    </Route>
  ));

  const blogArticlesRoutes = NEWS.map((item) => (
    <Route key={item.ID} exact path={item.LINK}>
      <BlogArticle item={item} />
    </Route>
  ));

  return (
    <>
      <Header handleOpenMenu={handleOpenMenu} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {leadersRoutes}

        <Route exact path='/blog' component={Blog} />
        {blogArticlesRoutes}

        <Route path='/donate' component={Donate} />
        <Route path='/donate-single' component={DonateSingle} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={PageNotFound} />
      </Switch>
      <Footer />

      <ScrollUpButton />
      <PopupMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default App;
