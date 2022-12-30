import { createSlice } from "@reduxjs/toolkit";

const codeSlice = createSlice({
  name: "code",
  initialState: {
    infoCode: [],
  },
  reducers: {
    addCode: (state, action) => {
      state.infoCode.push(action.payload);
    },
  },
});

export default codeSlice;
