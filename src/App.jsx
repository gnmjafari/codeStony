import React from "react";
import Menu from "./component/Menu";
import BoxCode from "./component/BoxCode";
import "./App.css";
import ListCodeSave from "./component/ListCodeSave";

function App() {
  return (
    <div dir="rtl" style={{ backgroundColor: "#282A31" }}>
      <Menu />
      <BoxCode />
      <ListCodeSave />
    </div>
  );
}

export default App;
