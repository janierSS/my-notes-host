// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  userId: number | null;
  message: string | null;
}

const initialState: AuthState = {
  userId: null,
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ userId: number; message: string }>) => {
      state.userId = action.payload.userId;
      state.message = action.payload.message;
    },
    logout: (state) => {
      state.userId = null;
      state.message = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice;
