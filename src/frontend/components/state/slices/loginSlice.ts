import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: "logedout" };
export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.count = "logedin";
    },
    logout: (state) => {
      state.count = "logedout";
    },
    loged: (state) => {
      console.log(state.count);
    },
  },
});
export const { login, logout, loged } = loginSlice.actions;
export default loginSlice.reducer;
