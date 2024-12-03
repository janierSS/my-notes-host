// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  authReceipt: string | null;
}

const initialState: AuthState = {
  authReceipt: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<string>) => {
      state.authReceipt = action.payload;
      
    },
    logout: (state) => {
      sessionStorage.removeItem('AUTH_RECEIPT')
      state.authReceipt = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice;
