import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './screens/login';
import { Provider } from 'react-redux';
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Login />
  </React.StrictMode>
  </Provider>
);
