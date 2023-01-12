import { Box, Typography, Button } from "@mui/material";
import React from "react";
import BoxCode from "./BoxCode";
import ListCodeSave from "./ListCodeSave";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

function Dashboard() {
  const userLogin = useSelector((state) => state.code.userLogin);
  const logiin = useSelector((state) => state.code.users);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  console.log(userLogin);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#282A31",
        paddingTop: "100px",
        direction: "rtl",
      }}
    >
      {userLogin.length == 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#282A31",
            height: "100vh",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginTop: "160px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "50px",
              backgroundColor: "#fff",
              color: "#282A31",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            برای استفاده از امکانات سایت همین الان وارد شو
          </Typography>
          <Button
            onClick={() => {
              Navigate("/RegisterForm");
              dispatch(setValue("هیچ"));
            }}
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
            <HowToRegIcon sx={{ fontSize: "30px" }} />
            ثبت نام
          </Button>
          <Button
            onClick={() => {
              Navigate("/LoginForm");
              dispatch(setValue("هیچ"));
            }}
            variant="none"
            sx={{
              gap: "20px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "40px",
              borderRadius: "20px",
              backgroundColor: "#F8CE46",
              color: "#282A31",
              fontSize: "30px",
              padding: "10px 40px",
              ":hover": {
                backgroundColor: "#F8CE46",
              },
            }}
          >
            <LoginIcon sx={{ fontSize: "30px" }} />
            ورود
          </Button>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              backgroundColor: "#F8CE46",
              padding: "10px 20px",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "50%",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h2">خوش آمدید </Typography>
            <Typography variant="h2">
              {userLogin.name} {userLogin.family}
            </Typography>
          </Box>
          <BoxCode />
          <ListCodeSave />
        </>
      )}
      ;
    </Box>
  );
}

export default Dashboard;
