import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { BaseLayout } from './layouts';

import { GreatingPage, WeaponesCategory, PistolsList } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<GreatingPage />} />
          <Route path="/weapones-categories" element={<WeaponesCategory />} />
          <Route path="/pistols-list" element={<PistolsList />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
