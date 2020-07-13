import React from 'react';
import './app.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/categories/categories';
import Products from './components/products/products';
import SimpleCart from './components/cart/cart';

export default props =>{

  return(
    <>
      <Header/>
      <SimpleCart/>
      <main className="mainBody">
        <Categories/>
        <Products/>
      </main>
      <Footer/>
    </>
  )
}
