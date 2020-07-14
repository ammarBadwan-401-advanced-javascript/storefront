import {combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';

import categories from './categories-reducer';
import products from './products-reducer';
import cart from './cart-reducer';

let reducers = combineReducers({ categories , products , cart });

const store = () =>{
  return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store();
