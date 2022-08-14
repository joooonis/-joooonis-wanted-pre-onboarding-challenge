import React from 'react';

import { Box, Checkbox } from '@mui/material';

function Todo() {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '5px',
        minHeight: '60px',
        display: 'flex',
        bgcolor: 'white',
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <Checkbox />
      <Box sx={{ alignSelf: 'center' }}>Share notes with Karen</Box>
    </Box>
  );
}

export default Todo;
