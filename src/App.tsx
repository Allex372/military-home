import React from 'react';
import { Route, Routes } from "react-router-dom";

import { BaseLayout } from './layouts';

import { GreatingPage, WeaponesCategory, PistolsList } from './pages';

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<GreatingPage />} />
        <Route path="/weapones-categories" element={<WeaponesCategory />} />
        <Route path="/pistols-list" element={<PistolsList />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
