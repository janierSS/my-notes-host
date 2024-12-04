import { configureStore, createSelector } from "@reduxjs/toolkit";
import authApiSlice from "../services/authApiSlice";
import authSlice from './authSlice'
// import notesApiSlice from 'notesHomeRemote/notesApiSlice'

// console.log('notesApiSlice: ', notesApiSlice);


const appStore = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    // [notesApiSlice.reducerPath]: notesApiSlice.reducer,
    [authSlice.name]: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(authApiSlice.middleware, notesApiSlice.middleware),
  getDefaultMiddleware().concat(authApiSlice.middleware),
});

export type appState = ReturnType<typeof appStore.getState>;

export default appStore;