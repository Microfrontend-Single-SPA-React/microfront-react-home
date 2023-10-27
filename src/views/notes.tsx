import LayoutCustom from "../layouts/LayoutCustom";
import { Button } from "@mui/material";
import { useState } from "react";
import AddNotes from "../components/notes/AddNotes";
import ListNotes from "../components/notes/ListNotes";

export default function Notes() {
  const [isAddNotesOpen, setAddNotesOpen] = useState(false);

  const openAddNotesDialog = () => {
    setAddNotesOpen(true);
  };

  const closeAddNotesDialog = () => {
    setAddNotesOpen(false);
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
          <ListNotes  />
        </div>
      </div>
      <AddNotes
        open={isAddNotesOpen}
        handleClose={closeAddNotesDialog}
      />
    </LayoutCustom>
  )
}