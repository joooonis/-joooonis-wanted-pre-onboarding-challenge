import { Routes, Route } from 'react-router-dom';

import React from 'react';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signin' element={<SignInPage />}></Route>
    </Routes>
  );
}

export default App;
