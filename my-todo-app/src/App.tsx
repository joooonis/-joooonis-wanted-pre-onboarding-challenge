import { Routes, Route } from 'react-router-dom';

import React from 'react';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3894D6',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
