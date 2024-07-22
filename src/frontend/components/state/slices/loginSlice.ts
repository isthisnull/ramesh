import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: false };
export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.count = true;
    },
    logout: (state) => {
      state.count = false;
    },
    increment: (state) => {
      state.count = !state;
    },
  },
});
export const { login, logout, increment } = loginSlice.actions;
export default loginSlice.reducer;
