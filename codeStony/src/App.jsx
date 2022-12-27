import { Typography } from "@mui/material";
import React from "react";
import Menu from "./component/Menu";
import { Provider } from "react-redux";
import store from "./component/store";
import Sss from "./component/sss";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div dir="rtl">
        <Menu />
      </div>
    </Provider>
  );
}

export default App;
