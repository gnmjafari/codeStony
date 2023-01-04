import { createSlice } from "@reduxjs/toolkit";

const codeSlice = createSlice({
  name: "code",
  initialState: {
    value: "صفحه اصلی",
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
    ShowEdit: (state, action) => {
      state.infoCode.map((item) => {
        if (item.id === action.payload.id) {
          item.edit = action.payload.edit;
        }
      });
    },
    EditCode: (state, action) => {
      state.infoCode.map((item) => {
        if (item.id === action.payload.id) {
          item.edit = action.payload.edit;
          item.addTitel = action.payload.addTitel;
          item.addCodeSave = action.payload.addCodeSave;
          item.addTextSave = action.payload.addTextSave;
        }
      });
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default codeSlice;
