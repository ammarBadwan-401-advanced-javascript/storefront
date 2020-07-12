import React from 'react';
import './app.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/categories/categories';

export default props =>{

  return(
    <>
      <Header/>
      <Categories/>
      <Footer/>
    </>
  )
}
