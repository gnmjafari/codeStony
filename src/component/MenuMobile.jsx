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

function MenuMobile() {
  const pages = ["صفحه اصلی", "داشبورد", "ارتباط با ما", "درباره پروژه"];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Typography
        variant="h5"
        sx={{ marginRight: "auto", color: "#F8CE46", fontWeight: "700" }}
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
              return (
                <ListItemButton key={index} sx={{ justifyContent: "flex-end" }}>
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
            })}
            <Button
              sx={{
                width: "100%",
                position: "absolute",
                bottom: "0",
                left: "0",
                backgroundColor: "#F8CE46",
                color: "#282A31",
                ":hover": {
                  backgroundColor: "#F8CE46",
                },
              }}
            >
              Login / SingUp
            </Button>
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
