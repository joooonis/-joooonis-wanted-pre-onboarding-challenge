import React from 'react';
import Header from './common/Header';
import { Box } from '@mui/material';
import Todos from './Todos';
import TodoFormDialog from './TodoFormDialog';
import { CONFIG } from '@config';
import instance from '@apis/instance';

function Home() {
  console.log(CONFIG.API_BASE_URL);
  const createTodo = async () => {
    const data = {
      email: 'xowns3213@naver.com',
      password: 'bak33213!@',
    };
    instance.post('/users/create', data).then((res) => console.log(res));
  };
  return (
    <Box>
      <Header />
      <Todos />
      <TodoFormDialog />
      <button onClick={createTodo}>api</button>
    </Box>
  );
}

export default Home;
