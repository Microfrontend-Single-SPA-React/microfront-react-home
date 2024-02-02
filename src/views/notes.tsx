import LayoutCustom from "../layouts/LayoutCustom";
import { Button } from "@mui/material";
import { useState } from "react";
import AddNotes from "../components/notes/AddNotes";
import ListNotes from "../components/notes/ListNotes";
import { Notes } from "../interfaces/notes.interface";
import { ACTIONS } from "../constants/actions";

export default function NotesView() {
  const [isAddNotesOpen, setIsAddNotesOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState({} as Notes);

  const openAddNotesDialog = () => {
    setIsAddNotesOpen(true);
  };

  const closeAddNotesDialog = () => {
    setIsAddNotesOpen(false);
  };

  const getItemSelected = (datos: Notes, code: string) => {

    if (code == ACTIONS.EDIT) {
      setItemSelected(datos);
      openAddNotesDialog();
    }
    
  };

  return (
    <LayoutCustom>
      <div className="notes_view__container">
        <div className="notes_view__content">
          <div>
            <Button
              className="notes_view__content__add"
              variant="contained"
              onClick={openAddNotesDialog}
              data-testid="add_note"
            >
              Add Note
            </Button>
          </div>
          <ListNotes onEmit={getItemSelected} />
        </div>
      </div>
      <AddNotes
        open={isAddNotesOpen}
        item={itemSelected}
        handleClose={closeAddNotesDialog}
      />
    </LayoutCustom>
  )
}