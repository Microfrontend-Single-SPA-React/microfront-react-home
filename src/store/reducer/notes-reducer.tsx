import { createSlice } from '@reduxjs/toolkit'
import { Notes } from "../../interfaces/notes.interface"

const notesSlice = createSlice({
  name: 'noteStore',
  initialState: {
    notes: [] as Notes[]
  },
  reducers: {
    noteAdded(state, action) {
      state.notes.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        completed: false
      })
    },
    noteToggled(state, action) {
      const note = state.notes.find(note => note.id === action.payload)
      note.completed = !note.completed
    },
    updatedNote(state, action) {
      const data: Notes = action.payload;
      const note = state.notes.find(note => note.id === data.id)
      note.title = data.title
      note.description = data.description
      note.completed = data.completed
    }
  }
})

export const { noteAdded, noteToggled, updatedNote } = notesSlice.actions

export const noteCount = (state): number => state.noteStore.notes.length;
export const notes = (state): Notes[] => state.noteStore.notes;

export default notesSlice.reducer