import React from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

function Menu() {
  const pages = ["صفحه اصلی", "داشبورد", "ارتباط با ما", "درباره پروژه"];
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar>
      <Toolbar>
        {isMatch ? (
          <MenuMobile />
        ) : (
          <>
            <Typography variant="h6" sx={{ marginLeft: "15px" }}>
              Code Stony
            </Typography>
            <Tabs
              textColor="inherit"
              value={value}
              indicatorColor="secondary"
              onChange={(e, newValue) => setValue(newValue)}
            >
              {pages.map((page, index) => {
                return (
                  <Tab
                    sx={{ fontFamily: "Byekan", fontSize: "17px" }}
                    key={index}
                    label={page}
                  />
                );
              })}
            </Tabs>
            <Button
              color="success"
              sx={{ marginRight: "auto" }}
              variant="contained"
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
