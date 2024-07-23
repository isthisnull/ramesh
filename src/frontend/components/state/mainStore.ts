import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./slices/loginSlice";

const mainStore = configureStore({
  reducer: {
    loginSlice: loginSliceReducer,
  },
});
export default mainStore;
export type RootState = ReturnType<typeof mainStore.getState>;
