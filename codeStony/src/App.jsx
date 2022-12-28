import { Typography } from "@mui/material";
import React from "react";
import Menu from "./component/Menu";
import BoxCode from "./component/BoxCode";
import { Provider } from "react-redux";
import store from "./component/Store/store";
import Sss from "./component/sss";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div dir="rtl">
        <Menu />
        <BoxCode />
      </div>
    </Provider>
  );
}

export default App;
