import React from 'react';

import { Stack } from '@mui/material';
import Todo from './Todo';
function Todos() {
  return (
    <Stack spacing={0.4}>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </Stack>
  );
}

export default Todos;
