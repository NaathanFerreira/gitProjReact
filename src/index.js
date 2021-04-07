import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Promise from 'redux-promise'
import Reducers from './store/storeConfig'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(Promise)(createStore)(Reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

