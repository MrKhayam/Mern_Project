import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authenticate/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
