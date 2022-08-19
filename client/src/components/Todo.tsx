import React from 'react';

import {
  Box,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Todo() {
  return (
    <div>
      <Accordion
        sx={{
          width: '100%',
          borderRadius: '5px',
          bgcolor: 'white',
          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <AccordionSummary
          sx={{ display: 'flex', alignItems: 'center' }}
          expandIcon={<ExpandMoreIcon />}>
          <Checkbox />
          <Typography alignSelf={'center'}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Share notes with Karen</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    // <Box
    //   sx={{
    //     width: '100%',
    //     borderRadius: '5px',
    //     minHeight: '60px',
    //     display: 'flex',
    //     bgcolor: 'white',
    //     '&:hover': {
    //       opacity: [0.9, 0.8, 0.7],
    //     },
    //   }}>
    //   <Checkbox />
    //   <Box sx={{ alignSelf: 'center' }}>Share notes with Karen</Box>
    // </Box>
  );
}

export default Todo;
