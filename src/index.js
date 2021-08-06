import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StoreContainer } from './store'

ReactDOM.render(
  <React.StrictMode>
    <StoreContainer>
    <App />
    </StoreContainer>
  </React.StrictMode>,
  document.getElementById('root')
);