import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";

function MenuMobile() {
  const pages = ["صفحه اصلی", "داشبورد", "ارتباط با ما", "درباره پروژه"];
  const Navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Typography
        variant="h5"
        sx={{ marginRight: "auto", color: "#fff", fontWeight: "700" }}
      >
        Code Stony
      </Typography>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor={"right"}
      >
        <Box sx={{ width: "300px", textAlign: "right" }}>
          <List sx={{ height: "100vh", backgroundColor: "#282A31" }}>
            {pages.map((page, index) => {
              if (page == "صفحه اصلی") {
                return (
                  <ListItemButton
                    onClick={() => {
                      Navigate("/Home");
                    }}
                    key={index}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <ListItemIcon>
                      <ListItemText
                        disableTypography={true}
                        sx={{
                          fontFamily: "Byekan",
                          fontSize: "22px",
                          color: "#F8CE46",
                        }}
                        primary={page}
                        onClick={() => setOpenMenu(false)}
                      ></ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                );
              }
              if (page == "داشبورد") {
                return (
                  <ListItemButton
                    onClick={() => {
                      Navigate("/Dashboard");
                    }}
                    key={index}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <ListItemIcon>
                      <ListItemText
                        disableTypography={true}
                        sx={{
                          fontFamily: "Byekan",
                          fontSize: "22px",
                          color: "#F8CE46",
                        }}
                        primary={page}
                        onClick={() => setOpenMenu(false)}
                      ></ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                );
              }
              if (page == "ارتباط با ما") {
                return (
                  <ListItemButton
                    onClick={() => {
                      Navigate("/ContactUs");
                    }}
                    key={index}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <ListItemIcon>
                      <ListItemText
                        disableTypography={true}
                        sx={{
                          fontFamily: "Byekan",
                          fontSize: "22px",
                          color: "#F8CE46",
                        }}
                        primary={page}
                        onClick={() => setOpenMenu(false)}
                      ></ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                );
              }
              if (page == "درباره پروژه") {
                return (
                  <ListItemButton
                    onClick={() => {
                      Navigate("/About");
                    }}
                    key={index}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <ListItemIcon>
                      <ListItemText
                        disableTypography={true}
                        sx={{
                          fontFamily: "Byekan",
                          fontSize: "22px",
                          color: "#F8CE46",
                        }}
                        primary={page}
                        onClick={() => setOpenMenu(false)}
                      ></ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                );
              }
            })}

            <Box
              sx={{
                width: "100%",
                position: "absolute",
                bottom: "0",
                left: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  Navigate("/RegisterForm");
                  dispatch(setValue("داشبورد"));
                }}
                startIcon={<HowToRegIcon />}
                variant="none"
                sx={{
                  width: "90%",
                  gap: "10px",
                  backgroundColor: "#F8CE46",
                  color: "#282A31",
                  ":hover": {
                    backgroundColor: "#F8CE46",
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
                  width: "90%",
                  gap: "10px",
                  backgroundColor: "#F8CE46",
                  color: "#282A31",
                  ":hover": {
                    backgroundColor: "#F8CE46",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
      <IconButton
        sx={{ marginRight: "auto", color: "white" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuIcon sx={{ fontSize: "35px" }} />
      </IconButton>
    </>
  );
}

export default MenuMobile;
