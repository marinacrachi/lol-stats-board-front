import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Matches = lazy(() => import('./pages/Matches'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches/:player" element={<Matches />} />
      </Routes>
    </Router>
  );
};

export default App;
