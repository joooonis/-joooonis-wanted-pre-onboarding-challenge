import React from 'react';
import Header from './common/Header';
import { Box } from '@mui/material';

import Todos from './Todos';
function Home() {
  return (
    <Box>
      <Header />
      <Todos />
    </Box>
  );
}

export default Home;
