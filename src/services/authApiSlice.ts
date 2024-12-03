import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginFormValue, LoginResponse } from "../types/types";
import { setCredentials } from "../store/authSlice";

const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: '/api'
  }),
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginFormValue>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data.authReceipt)); // Store userId in authSlice
          sessionStorage.setItem('AUTH_RECEIPT', data.authReceipt)
        } catch (err) {
          console.error('Login failed:', err);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;

export default authApiSlice;
