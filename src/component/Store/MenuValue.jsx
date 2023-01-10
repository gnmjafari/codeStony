import { createSlice } from "@reduxjs/toolkit";

const MenuValue = createSlice({
  name: "MenuValue",
  initialState: {
    value: "صفحه اصلی",
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default MenuValue;
