import { configureStore } from "@reduxjs/toolkit";
import codeSlice from "./CodeSlice";

const store = configureStore({
  reducer: {
    code: codeSlice.reducer,
  },
});

export default store;
