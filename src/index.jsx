import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Programmer } from './components/Programmer';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <Programmer />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
