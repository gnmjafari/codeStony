import { configureStore } from "@reduxjs/toolkit";
import counterRedeucer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterRedeucer,
  },
});

export default store;
