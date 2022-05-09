import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import "assets/scss/material-kit-react.scss";
// import "react-datetime/css/react-datetime.css";
// import "../src/assets/scss/plugins/_plugin-react-datetime.scss";
// import "../src/assets/scss/plugins/_plugin-react-"

// import "assets/scss/material-kit-react.scss?v=1.10.0";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets2/style/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReceivedVehicles from './views/ReceivedVehicles/ReceivedVehicles';
import ExpectedVehicles from './views/ExpectedVehicles/ExpectedVehicles';
import Dashboard from './views/Dashboard';
import Questionnaire from './views/Questionnaire/Questionnaire';
import Invoice from './views/Invoice/Invoice';
// import Dashboard from './views/Dashboard';

import "react-datepicker/dist/react-datepicker.css";

import { Provider } from 'react-redux';
import store from './store';
import Main from './main';

let hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
