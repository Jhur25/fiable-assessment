import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GridPage from './GridPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GridPage position="1 1 SOUTH" />
  </React.StrictMode>
);