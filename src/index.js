import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Убедитесь, что этот файл существует и содержит стили для body, etc.
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Если вы хотите начать измерение производительности в вашем приложении, передайте функцию
// для логирования результатов (например: reportWebVitals(console.log))
// или отправьте в аналитический конечный пункт. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();