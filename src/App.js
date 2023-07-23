import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/home';
import GameProjects from './components/gameprojects';
import AppProjects from './components/appprojects';
import Navigation from './components/navgitaion';
import Footer from './components/footer';

const ScrollToTop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, navigate]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameprojects" element={<GameProjects />} />
        <Route path="/appprojects" element={<AppProjects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
