import { createSlice } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'noteStore',
  initialState: {
    notes: []
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
    }
  }
})

export const { noteAdded, noteToggled } = notesSlice.actions

export const noteCount = (state) => state.noteStore.notes.length;
export const notes = (state) => state.noteStore.notes;

export default notesSlice.reducer