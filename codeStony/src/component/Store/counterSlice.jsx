import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
const initialState1 = { num: 0 };

function incerement(state) {
  state.value += 1;
}

function decerement(state) {
  state.value -= 1;
}

export const counterSlice = createSlice({
  name: "Ali",
  initialState,
  initialState1,
  reducers: {
    incerement,
    decerement,
  },
});

export const { incerement: incerementAction, decerement: decerementAction } =
  counterSlice.actions;

export default counterSlice.reducer;
