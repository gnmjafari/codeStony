import { Typography } from "@mui/material";
import React from "react";
import BoxCode from "./BoxCode";
import ListCodeSave from "./ListCodeSave";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const userLogin = useSelector((state) => state.code.userLogin);
  return (
    <div dir="rtl" style={{ backgroundColor: "#282A31" }}>
      <Typography
        variant="h1"
        sx={{ paddingTop: "150px", textAlign: "center" }}
      >
        {userLogin}
      </Typography>
      <BoxCode />
      <ListCodeSave />
    </div>
  );
}

export default Dashboard;
