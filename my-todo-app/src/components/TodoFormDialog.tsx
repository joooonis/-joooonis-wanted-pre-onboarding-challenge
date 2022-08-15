import * as React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Avatar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function TodoFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar
        onClick={handleClickOpen}
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ pb: '1px' }}>Add Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='title'
            fullWidth
            variant='standard'
          />
          <TextField
            id='outlined-multiline-static'
            label='detail'
            multiline
            fullWidth
            rows={4}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
