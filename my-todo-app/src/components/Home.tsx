import React from 'react';
import Header from './common/Header';
import { Box } from '@mui/material';
import Todos from './Todos';
import TodoFormDialog from './TodoFormDialog';

function Home() {
  return (
    <Box>
      <Header />
      <Todos />
      <TodoFormDialog />
    </Box>
  );
}

export default Home;
