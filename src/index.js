import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
// eslint-disable-next-line
import Mmenu from 'mmenu-js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import ScrollToTop from './components/ScrollToTop'
import './index.sass';


import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Provider>
    </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);