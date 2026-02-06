import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import WebdesignPage from './pages/WebdesignPage';
import BrandingPage from './pages/BrandingPage';
import PolygraphyPage from './pages/PolygraphyPage';
import SocialsPage from './pages/SocialsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/webdesign" element={<WebdesignPage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/polygraphy" element={<PolygraphyPage />} />
        <Route path="/socials" element={<SocialsPage />} />
      </Routes>
    </Router>
  );
}

export default App;