import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

const Home = lazy(() => import('./pages/Home'));
const Summoner = lazy(() => import('./pages/Summoner'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summoner/:player" element={<Summoner />} />
      </Routes>
  </Router>
  );
};

export default App;
