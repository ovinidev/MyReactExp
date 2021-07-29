import React from 'react';
import ReactDOM from 'react-dom';
import { Description } from './components/Description';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Programmer } from './components/Programmer';
import { Skils } from './components/Skils';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <Programmer />
      <Description />
      <Skils />
      <Gallery />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
