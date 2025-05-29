import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample from './Sample.js'
import App from './App';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sample/>
  </React.StrictMode>
);
