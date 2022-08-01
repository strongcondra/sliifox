import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import store from './app/store'
import { Provider } from 'react-redux'

// import { useCookies } from "react-cookie";
// const [cookies, setCookie] = useCookies(["user"]);
// setCookie("user", "gowtham", {
//   path: '/',
//   domain: 'localhost',
//   sameSite: 'none',
//   secure: true,
// });
const axios = require('axios').default;
window.instance = axios.create({
  baseURL: 'http://localhost:3001'
});
const root = ReactDOM.createRoot(document.getElementById('root'));
window.stepData={}
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
