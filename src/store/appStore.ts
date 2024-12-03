import { configureStore, createSelector } from "@reduxjs/toolkit";
import loginApiSlice from "loginRemote/loginApiSlice";

const appStore = configureStore({
  reducer: {
    [loginApiSlice.reducerPath]: loginApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApiSlice.middleware),
});

const selectUserIdResult = loginApiSlice.endpoints.login.select()
export const selectUserId = createSelector(selectUserIdResult, result => result?.data?.userId)

export type appState = ReturnType<typeof appStore.getState>;

export default appStore;
