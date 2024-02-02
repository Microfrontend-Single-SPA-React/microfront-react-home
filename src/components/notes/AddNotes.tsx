import { useEffect, useState } from 'react';
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
import { noteAdded, noteCount, updatedNote } from '../../store/reducer/notes-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AddNotesProps } from "../../interfaces/notes.interface";

const AddNotes: React.FC<AddNotesProps> = ({ open, item, handleClose }) => {
  const dispatch = useDispatch();
  const count = useSelector(noteCount);
  const [id, setId] = useState(0);
  const [textDescription, setTextDescription] = useState('');
  const [textTitle, setTextTitle] = useState('');

  const handleTextAreaDescription = (newDescription) => {
    setTextDescription(newDescription);
  };

  const handleTextTitle = (event) => {
    const newTitle = event.target.value;
    setTextTitle(newTitle);
  };
  useEffect(() => {
    setTextDescription(item.description);
    setTextTitle(item.title);
    setId(item.id);
    console.log('Component mounted');
    // Clean up function (optional)
    return () => {
      // Perform cleanup if needed when the component is unmounted
      console.log('Component unmounted');
    };
  }, [item]);

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

  const updateNote = () => {
    dispatch(
      updatedNote({
        id: id,
        title: textTitle,
        description: textDescription,
        completed: item.completed
      })
    );
    close()
  };

  const save = () => {
    if (item.id) {
      updateNote();
    } else {
      noteAdd();
    }
  }

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
        {item.id ? 'Edit Note' : 'Add a new note'}
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
            name="title_note"
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
          onClick={save} variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddNotes;