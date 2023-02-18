import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuMobile from "./MenuMobile";
import LoginIcon from "@mui/icons-material/Login";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import codeSlice from "./Store/CodeSlice";
import MenuValue from "./Store/MenuValue";
import HowToRegIcon from "@mui/icons-material/HowToReg";

function Menu() {
  const pages = ["صفحه اصلی", "داشبورد", "ارتباط با ما", "درباره پروژه"];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.MenuValue.value);
  const userLogin = useSelector((state) => state.code.userLogin);
  const { setValue } = MenuValue.actions;
  const { logOut } = codeSlice.actions;
  console.log(count);

  return (
    <AppBar
      dir="rtl"
      position="fixed"
      sx={{
        // backgroundColor: "#282A31",
        backgroundColor: "#F8CE46",
        color: "#fff",
        right: "0px",
        bottom: "0px",
        width: "250px",
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        {isMatch ? (
          <MenuMobile />
        ) : (
          <>
            <Typography
              variant="h5"
              sx={{ marginLeft: "15px", color: "#282A31", fontWeight: "700" }}
            >
              Code Stony
            </Typography>
            <Tabs
              textColor="inherit"
              value={count}
              sx={{
                color: "#282A31",
                "& .MuiTabs-indicator": {
                  backgroundColor: "#282A31",
                },
                alignItems: "flex-start",
              }}
              orientation="vertical"
            >
              {pages.map((page, index) => {
                if (page == "صفحه اصلی") {
                  return (
                    <Tab
                      icon={<HomeOutlinedIcon fontSize="medium" />}
                      iconPosition="start"
                      value="صفحه اصلی"
                      onClick={() => {
                        Navigate("/Home");
                        dispatch(setValue("صفحه اصلی"));
                      }}
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-start",
                      }}
                      key={index}
                      label={page}
                    />
                  );
                }
                if (page == "داشبورد") {
                  return (
                    <Tab
                      icon={<DashboardOutlinedIcon fontSize="medium" />}
                      iconPosition="start"
                      value="داشبورد"
                      onClick={() => {
                        Navigate("/Dashboard");
                        dispatch(setValue("داشبورد"));
                      }}
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-start",
                      }}
                      key={index}
                      label={page}
                    />
                  );
                }
                if (page == "ارتباط با ما") {
                  return (
                    <Tab
                      icon={<PhoneEnabledOutlinedIcon fontSize="medium" />}
                      iconPosition="start"
                      value="ارتباط با ما"
                      onClick={() => {
                        Navigate("/ContactUs");
                        dispatch(setValue("ارتباط با ما"));
                      }}
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-start",
                      }}
                      key={index}
                      label={page}
                    />
                  );
                }
                if (page == "درباره پروژه") {
                  return (
                    <Tab
                      icon={<ContactSupportOutlinedIcon fontSize="medium" />}
                      iconPosition="start"
                      value="درباره پروژه"
                      onClick={() => {
                        Navigate("/About");
                        dispatch(setValue("درباره پروژه"));
                      }}
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-start",
                      }}
                      key={index}
                      label={page}
                    />
                  );
                }
              })}
            </Tabs>
            {userLogin.length == 0 ? (
              <>
                <Box sx={{ marginTop: "auto" }}>
                  <Button
                    onClick={() => {
                      Navigate("/RegisterForm");
                      dispatch(setValue("داشبورد"));
                    }}
                    startIcon={<HowToRegIcon />}
                    variant="none"
                    sx={{
                      gap: "10px",
                      backgroundColor: "#282A31",
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "#282A31",
                      },
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    onClick={() => {
                      Navigate("/LoginForm");
                      dispatch(setValue("داشبورد"));
                    }}
                    startIcon={<LoginIcon />}
                    variant="none"
                    sx={{
                      gap: "10px",
                      backgroundColor: "#282A31",
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "#282A31",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    dispatch(logOut([]));
                  }}
                  startIcon={<HowToRegIcon />}
                  variant="none"
                  sx={{
                    justifyContent: "center",
                    gap: "10px",
                    backgroundColor: "#282A31",
                    color: "#fff",
                    ":hover": {
                      backgroundColor: "#282A31",
                    },
                    marginTop: "auto",
                    width: "100%",
                  }}
                >
                  logOut
                </Button>
              </>
            )}
            {/* <Box sx={{ marginRight: "auto" }}>
              <Button
                onClick={() => {
                  Navigate("/RegisterForm");
                  dispatch(setValue("صفحه اصلی"));
                }}
                startIcon={<HowToRegIcon />}
                variant="none"
                sx={{
                  gap: "10px",
                  backgroundColor: "#282A31",
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "#282A31",
                  },
                }}
              >
                Register
              </Button>
              <Button
                onClick={() => {
                  Navigate("/LoginForm");
                  dispatch(setValue("صفحه اصلی"));
                }}
                startIcon={<LoginIcon />}
                variant="none"
                sx={{
                  gap: "10px",
                  marginRight: "15px",
                  backgroundColor: "#282A31",
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "#282A31",
                  },
                }}
              >
                Login
              </Button>
            </Box> */}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
