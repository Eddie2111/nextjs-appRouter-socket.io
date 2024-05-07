"use client";
import { createSlice } from '@reduxjs/toolkit';

interface actionProps {
  payload: {
    email: string;
  };
}
interface stateProps {
  value: {
    email: string;
  };
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      email: "",
    },
  },
  reducers: {
    signup: (state: stateProps, action: actionProps) => {
      console.log("action payload for signup", action.payload);
    },
    login: (state: stateProps, action: actionProps) => {
      console.log("action payload for login", action.payload);
    },
    logout: (action: actionProps) => {
      console.log("pass {username:<username>} as a value");
    },
  },
});

// Action creators are generated for each case reducer function
export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;
