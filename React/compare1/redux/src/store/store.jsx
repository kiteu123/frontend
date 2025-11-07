import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import React from "react";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
