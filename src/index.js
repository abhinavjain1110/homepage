// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './styles/globals.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
