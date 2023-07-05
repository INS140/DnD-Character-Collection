import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CurrentUserProvider from './components/context/currentUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </BrowserRouter>
);

reportWebVitals();