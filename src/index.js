import React from 'react';
import ReactDOM from 'react-dom/client';

//local imports
import App from './App';
import 'normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


