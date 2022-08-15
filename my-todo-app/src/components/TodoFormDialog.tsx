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
import { useForm } from 'react-hook-form';

export default function TodoFormDialog() {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    handleClose();
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
      <form>
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
              {...register('title')}
            />
            <TextField
              id='outlined-multiline-static'
              label='detail'
              multiline
              fullWidth
              rows={4}
              sx={{ mt: 1 }}
              {...register('detail')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)}>Add</Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
