import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './store/index';

const Main = props =>{

  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Main/>,root);