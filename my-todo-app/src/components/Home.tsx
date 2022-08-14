import React from 'react';
import Header from './common/Header';
import { Box, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Todos from './Todos';

function Home() {
  return (
    <Box>
      <Header />
      <Todos />
      <Avatar
        onClick={() => console.log('clicks')}
        sx={{
          bgcolor: 'white',
          position: 'fixed',
          right: '30px',
          bottom: '60px',
          width: 55,
          height: 55,
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <AddIcon
          sx={{
            color: 'primary.main',
            width: 30,
            height: 30,
          }}
        />
      </Avatar>
    </Box>
  );
}

export default Home;
