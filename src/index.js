import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducers from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
