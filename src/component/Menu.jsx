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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import codeSlice from "./Store/CodeSlice";
import HowToRegIcon from "@mui/icons-material/HowToReg";

function Menu() {
  const pages = ["صفحه اصلی", "داشبورد", "ارتباط با ما", "َدرباره پروژه"];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.code.value);
  const { setValue } = codeSlice.actions;
  console.log(count);

  return (
    <AppBar dir="rtl" sx={{ backgroundColor: "#F8CE46", color: "#fff" }}>
      <Toolbar>
        {isMatch ? (
          <MenuMobile />
        ) : (
          <>
            <Typography
              variant="h5"
              sx={{ marginLeft: "15px", color: "#fff", fontWeight: "700" }}
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
              }}
            >
              {pages.map((page, index) => {
                if (page == "صفحه اصلی") {
                  return (
                    <Tab
                      value="صفحه اصلی"
                      onClick={() => {
                        Navigate("/Home");
                        dispatch(setValue("صفحه اصلی"));
                      }}
                      sx={{ fontFamily: "Byekan", fontSize: "18px" }}
                      key={index}
                      label={page}
                    />
                  );
                }
                if (page == "داشبورد") {
                  return (
                    <Tab
                      value="داشبورد"
                      onClick={() => {
                        Navigate("/Dashboard");
                        dispatch(setValue("داشبورد"));
                      }}
                      sx={{ fontFamily: "Byekan", fontSize: "18px" }}
                      key={index}
                      label={page}
                    />
                  );
                }
                if (page == "ارتباط با ما") {
                  return (
                    <Tab
                      value="ارتباط با ما"
                      onClick={() => {
                        Navigate("/ContactUs");
                        dispatch(setValue("ارتباط با ما"));
                      }}
                      sx={{ fontFamily: "Byekan", fontSize: "18px" }}
                      key={index}
                      label={page}
                    />
                  );
                }
                if (page == "َدرباره پروژه") {
                  return (
                    <Tab
                      value="َدرباره پروژه"
                      onClick={() => {
                        Navigate("/About");
                        dispatch(setValue("َدرباره پروژه"));
                      }}
                      sx={{ fontFamily: "Byekan", fontSize: "18px" }}
                      key={index}
                      label={page}
                    />
                  );
                }
              })}
            </Tabs>
            <Box sx={{ marginRight: "auto" }}>
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
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
