// src/index.js
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Work from './components/Work';
import { Home } from './components/Home';
import Particle from './addons/Particles';
import ThemeContextProvider from './addons/UseTheme';
import CustomCursor from './addons/CustomCursor';
import ThemeToggle from './addons/ThemeToggler';

function App() {
  // 1. Refs para cada seção (Home e Work)
  const sectionRefs = [useRef(null), useRef(null)];

  // 2. currentIndex = 0 → Home; 1 → Work
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Flag que indica se já estamos animando um scroll
  const isAnimatingRef = useRef(false);

  // 4. Função que captura evento de roda do mouse
  const handleWheel = (e) => {
    e.preventDefault(); // evita scroll nativo

    if (isAnimatingRef.current) {
      // Já tem animação rolando, ignoramos
      return;
    }

    const deltaY = e.deltaY;
    if (deltaY > 0) {
      // Scroll para baixo → vai pra próxima seção (se existir)
      if (currentIndex < sectionRefs.length - 1) {
        isAnimatingRef.current = true;
        const nextIndex = currentIndex + 1;
        const nextSection = sectionRefs[nextIndex].current;

        // Scroll suave até o topo da próxima seção
        nextSection.scrollIntoView({ behavior: 'smooth' });

        setCurrentIndex(nextIndex);
        // Aproximamos que leva ~700ms para o scroll suave terminar
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 700);
      }
    } else if (deltaY < 0) {
      // Scroll para cima → vai para seção anterior (se existir)
      if (currentIndex > 0) {
        isAnimatingRef.current = true;
        const prevIndex = currentIndex - 1;
        const prevSection = sectionRefs[prevIndex].current;

        prevSection.scrollIntoView({ behavior: 'smooth' });
        setCurrentIndex(prevIndex);

        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 700);
      }
    }
  };

  useEffect(() => {
    if (sectionRefs[0].current) {
      sectionRefs[0].current.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  /**
   * @param {number} targetY - número de pixels no topo da página aonde queremos ir (window.scrollY)
   * @param {number} duration - duração total da animação em milissegundos (ex: 700)
   */
  function smoothScrollTo(targetY, duration = 700) {
    const startY = window.scrollY;           // posição inicial atual da janela
    const change = targetY - startY;         // distância que ainda falta percorrer
    const startTime = performance.now();     // momento em que a animação começa (timestamp alto-resolução)
  
    function animate(currentTime) {
      const elapsed = currentTime - startTime;         // quanto tempo já passou desde o início
      const nextY = easeInOutQuad(elapsed, startY, change, duration);
  
      window.scrollTo(0, nextY);
  
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        window.scrollTo(0, targetY);
      }
    }
  
    requestAnimationFrame(animate);
  }

  return (
    <ThemeContextProvider>
      <CustomCursor />
      <ThemeToggle />
      <Particle />
      <div
        onWheel={handleWheel}
        style={{
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Home ref={sectionRefs[0]} />
        <Work ref={sectionRefs[1]} />
      </div>
    </ThemeContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
