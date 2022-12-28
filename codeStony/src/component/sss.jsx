import React from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { incerementAction, decerementAction } from "./Store/counterSlice";

function Sss() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  return (
    <div>
      <Typography variant="h4">value: {value}</Typography>
      <Button onClick={() => dispatch(incerementAction())} variant="contained">
        +
      </Button>
      <Button onClick={() => dispatch(decerementAction())} variant="contained">
        -
      </Button>
    </div>
  );
}

export default Sss;
