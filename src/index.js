import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Work from './components/Work';
import { Home } from './components/Home';
import Particle from './addons/Particles';
import ThemeContextProvider from './addons/UseTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Particle />
      <Home />
      <Work />
    </ThemeContextProvider>
  </React.StrictMode>
);

reportWebVitals();


