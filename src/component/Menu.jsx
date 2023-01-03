import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuMobile from "./MenuMobile";
import LoginIcon from "@mui/icons-material/Login";

function Menu() {
  const pages = ["صفحه اصلی", "داشبورد", "ارتباط با ما", "درباره پروژه"];
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar sx={{ backgroundColor: "#F8CE46", color: "#fff" }}>
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
              value={value}
              sx={{
                color: "#282A31",
                "& .MuiTabs-indicator": {
                  backgroundColor: "#282A31",
                },
              }}
              onChange={(e, newValue) => setValue(newValue)}
            >
              {pages.map((page, index) => {
                return (
                  <Tab
                    sx={{ fontFamily: "Byekan", fontSize: "18px" }}
                    key={index}
                    label={page}
                  />
                );
              })}
            </Tabs>
            <Button
              startIcon={<LoginIcon />}
              href="#"
              variant="none"
              sx={{
                gap: "10px",
                marginRight: "auto",
                backgroundColor: "#282A31",
                color: "#fff",
                ":hover": {
                  backgroundColor: "#282A31",
                },
              }}
            >
              Login / SingUp
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
