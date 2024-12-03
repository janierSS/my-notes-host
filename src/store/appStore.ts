import { configureStore, createSelector } from "@reduxjs/toolkit";
import authApiSlice from "../services/authApiSlice";
import authSlice from './authSlice'

const appStore = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [authSlice.name]: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});

export type appState = ReturnType<typeof appStore.getState>;

export default appStore;