import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './App';
import './css/index.css';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
