import React from "react";
import BoxCode from "./BoxCode";
import ListCodeSave from "./ListCodeSave";

function Dashboard() {
  return (
    <div dir="rtl" style={{ backgroundColor: "#282A31" }}>
      <BoxCode />
      <ListCodeSave />
    </div>
  );
}

export default Dashboard;
