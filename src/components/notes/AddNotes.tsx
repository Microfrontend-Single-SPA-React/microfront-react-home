import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import TextArea from '../text-area';
import { noteAdded, noteCount } from '../../store/reducer/notes-reducer';
import { useDispatch, useSelector } from 'react-redux';

export default function AddNotes({ open, handleClose }) {
  const dispatch = useDispatch();
  const count = useSelector(noteCount);

  const [textDescription, setTextDescription] = useState('');
  const [textTitle, setTextTitle] = useState('');

  const handleTextAreaDescription = (newDescription) => {
    setTextDescription(newDescription);
  };

  const handleTextTitle = (event) => {
    const newTitle = event.target.value;
    setTextTitle(newTitle);
  };

  const noteAdd = () => {
    dispatch(
      noteAdded({
        id: count + 1,
        title: textTitle,
        description: textDescription,
      })
    );
    close()
  };

  const cleanFields = () => {
    setTextTitle('');
    setTextDescription('');
  }
  const close = () => {
    cleanFields();
    handleClose();
  }

  return (
    <Dialog className="add_notes_modal" open={open} onClose={close} data-testid="add_notes_modal">
      <DialogTitle className="add_notes_modal__title" align="center">
        Add a new note
      </DialogTitle>
      <DialogContent>
        <Box
          className="add_notes_modal__content"
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField
            className="add_notes_modal__inputs__title"
            value={textTitle}
            size="small"
            label="Title"
            placeholder="Title"
            variant="outlined"
            fullWidth
            onChange={handleTextTitle}
          />
          <TextArea
            className="add_notes_modal__inputs__description"
            value={textDescription}
            placeholder="Description"
            emitValue={handleTextAreaDescription}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} variant="outlined">
          Cancel
        </Button>
        <Button
          data-testid="save_note"
          onClick={noteAdd} variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
