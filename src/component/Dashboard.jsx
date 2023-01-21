import { Box, Typography, Button, FormControl, Input } from "@mui/material";
import React, { useState } from "react";
import BoxCode from "./BoxCode";
import ListCodeSave from "./ListCodeSave";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

function Dashboard() {
  const { AddCategory } = codeSlice.actions;
  const show_category = useSelector((state) => state.code.category);
  const userLogin = useSelector((state) => state.code.userLogin);
  const logiin = useSelector((state) => state.code.users);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [add_category, setAdd_category] = useState("");

  console.log(userLogin);
  console.log(show_category);

  function handle_add_category() {
    dispatch(AddCategory({ name: add_category }));
    setAdd_category("");
    console.log("ali");
  }

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
              width: "90%",
              margin: "auto",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <Typography variant="h4">نام : {userLogin.name}</Typography>
              <Typography variant="h4">
                نام خانوادگی : {userLogin.family}
              </Typography>
              <Typography variant="h4">ایمیل : {userLogin.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <Typography variant="h4">تاریخ عضویت : 20</Typography>
              <Typography variant="h4">
                {userLogin.Date_of_registration}
              </Typography>
              <Typography variant="h4">ایمیل : {userLogin.email}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F8CE46",
              padding: "20px 20px",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "80%",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              marginTop: "80px",
            }}
          >
            <FormControl sx={{ width: "50%" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Byekan",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  borderRadius: "20px",
                  color: "#282A31",
                  width: "60%",
                  margin: "auto",
                  marginBottom: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                اضافه کردن دسته بندی
              </Typography>
              <Input
                onChange={(e) => setAdd_category(e.target.value)}
                value={add_category}
                disableUnderline="false"
                sx={{
                  fontFamily: "Byekan",
                  fontSize: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  color: "#282A31",
                  padding: "5px 10px",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
                multiline
                maxRows={4}
              />
              <Button
                onClick={handle_add_category}
                variant="none"
                sx={{
                  width: "200px",
                  padding: "10px 20px",
                  gap: "10px",
                  margin: "auto",
                  marginTop: "20px",
                  backgroundColor: "#282A31",
                  fontSize: "30px",
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "#282A31",
                  },
                }}
              >
                ثبت کن
              </Button>
            </FormControl>
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
