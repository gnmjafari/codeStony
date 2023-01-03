import { Typography } from "@mui/material";
import React from "react";
import Menu from "./component/Menu";
import BoxCode from "./component/BoxCode";
import { Provider } from "react-redux";
import store from "./component/Store/store";
import "./App.css";
import ListCodeSave from "./component/ListCodeSave";

function App() {
  return (
    <Provider store={store}>
      <div dir="rtl" style={{ backgroundColor: "#282A31" }}>
        <Menu />
        <BoxCode />
        <ListCodeSave />
      </div>
    </Provider>
  );
}

export default App;
