import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
const initialState1 = { num: 0 };

function incerement(state) {
  state.value += 1;
}

function decerement(state) {
  state.value -= 1;
}

function setValue0(state) {
  state.value = 0;
}
function setValue1(state) {
  state.value = 1;
}
function setValue2(state) {
  state.value = 2;
}

export const counterSlice = createSlice({
  name: "Ali",
  initialState,
  initialState1,
  reducers: {
    incerement,
    decerement,
    setValue0,
    setValue1,
    setValue2,
  },
});

export const {
  incerement: incerementAction,
  decerement: decerementAction,
  setValue0: setValue0Action,
  setValue1: setValue1Action,
  setValue2: setValue2Action,
} = counterSlice.actions;

export default counterSlice.reducer;
