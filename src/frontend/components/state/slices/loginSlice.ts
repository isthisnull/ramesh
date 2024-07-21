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
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
