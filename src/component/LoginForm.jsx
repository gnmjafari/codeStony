import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginForm() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();
  const { loginUser } = codeSlice.actions;

  function handleLogin() {
    dispatch(loginUser({ username: loginUsername, password: loginPassword }));
    setLoginUsername("");
    setLoginPassword("");
  }

  return (
    <Box
      style={{
        backgroundColor: "#282A31",
        height: "100Vh",
        paddingTop: "150px",
      }}
    >
      <Box
        style={{
          backgroundColor: "#fff",
          width: "80%",
          margin: "auto",
          padding: "20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#282A31",
            padding: "20px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
        >
          Code Stony
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <TextField
            onChange={(e) => setLoginUsername(e.target.value)}
            sx={{ width: "100%" }}
            label="Username"
            type="username"
          />
          <TextField
            onChange={(e) => setLoginPassword(e.target.value)}
            sx={{ width: "100%" }}
            label="Password"
            type="password"
          />
        </Box>
        <Button
          onClick={() => handleLogin()}
          variant="none"
          sx={{
            gap: "20px",
            fontWeight: "600",
            borderRadius: "20px",
            backgroundColor: "#F8CE46",
            color: "#282A31",
            fontSize: "30px",
            padding: "10px 30px",
            ":hover": {
              backgroundColor: "#F8CE46",
            },
          }}
        >
          ورود
        </Button>
      </Box>
    </Box>
  );
}

export default LoginForm;
