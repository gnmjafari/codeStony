import { configureStore, combineReducers } from "@reduxjs/toolkit";
import codeSlice from "./CodeSlice";
import MenuValue from "./MenuValue";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["MenuValue"],
};

const reducer = combineReducers({
  code: codeSlice.reducer,
  MenuValue: MenuValue.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
