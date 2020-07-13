import {combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import categories from './categories-reducer';
import products from './products-reducer';
import cart from './cart-reducer';

let reducers = combineReducers({ categories , products , cart });

const store = () =>{
  return createStore(reducers,composeWithDevTools());
}

export default store();
