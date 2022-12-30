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
    RemoveCode: (state, action) => {
      state.infoCode = state.infoCode.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export default codeSlice;
