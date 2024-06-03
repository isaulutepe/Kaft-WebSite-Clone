// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Router';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setIsFading(true); // Fade out başlat
      setTimeout(() => {
        setLoading(false); // Loading durumunu false yap
      }, 1000); // Fade out süresi ile aynı olmalı
    }, 3000); // 3 saniye sonra fade out başlat

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? <SplashScreen isFading={isFading} /> : <Routes />}
      </div>
    </Router>
  );
}

export default App;
