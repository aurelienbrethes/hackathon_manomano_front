import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductsContextProvider } from './contexts/Products';
import './styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

