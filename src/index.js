import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Убедитесь, что этот файл существует и содержит стили для body, etc.
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
