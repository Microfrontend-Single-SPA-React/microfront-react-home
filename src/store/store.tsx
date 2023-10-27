import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducer/notes-reducer";


export const store = configureStore({  reducer: {
  noteStore: notesReducer
}});
