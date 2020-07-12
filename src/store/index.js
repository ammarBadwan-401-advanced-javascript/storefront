import {combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import categories from './categories-store';
import products from './products-store';

let reducers = combineReducers({ categories , products });

const store = () =>{
  return createStore(reducers,composeWithDevTools());
}

export default store();
