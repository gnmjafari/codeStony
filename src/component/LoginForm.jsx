import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function LoginForm() {
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
            sx={{ width: "100%" }}
            label="Username Or Email"
            type="username"
          />
          <TextField sx={{ width: "100%" }} label="Password" type="password" />
        </Box>
        <Button
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