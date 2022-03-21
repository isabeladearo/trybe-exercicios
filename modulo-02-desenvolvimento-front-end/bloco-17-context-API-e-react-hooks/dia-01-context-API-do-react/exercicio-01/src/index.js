import React from 'react';
import ReactDOM from 'react-dom';
import CarsProvider from './context/CarsProvider';
import App from './App';

ReactDOM.render(
    <CarsProvider>
      <App />
    </CarsProvider>,
  document.getElementById('root'),
);
