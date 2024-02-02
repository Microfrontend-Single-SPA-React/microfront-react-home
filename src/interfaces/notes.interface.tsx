export interface Notes {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface AddNotesProps {
  open: boolean;
  item: Notes;
  handleClose: () => void;
}