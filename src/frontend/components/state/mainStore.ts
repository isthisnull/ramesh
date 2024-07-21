import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./slices/loginSlice";

const mainStore = configureStore({
  reducer: {
    loginSlice: loginSliceReducer,
  },
});
export default mainStore;
