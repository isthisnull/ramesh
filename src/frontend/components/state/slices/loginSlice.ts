import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: false };
export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.count = false;
    },
    logout: (state) => {
      state.count = true;
    },
    increment: (state) => {
      state.count = !state.count;
    },
  },
});
export const { login, logout, increment } = loginSlice.actions;
export default loginSlice.reducer;
