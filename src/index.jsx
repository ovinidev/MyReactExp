import React from 'react';
import ReactDOM from 'react-dom';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Goals } from './components/Goals';
import { Header } from './components/Header';
import { Hobby } from './components/Hobby';
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
      <Goals />
      <Hobby />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
