import React from "react";
import {
  Box,
  Button,
  Modal,
  FormControl,
  Input,
  Typography,
} from "@mui/material";
import { Modal_Style } from "./ui/StyleModal";
import { Button_Add_code } from "./ui/ButtonStyle";
import { useState } from "react";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";

function Add_Category() {
  const { AddCategory } = codeSlice.actions;
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.code.userLogin);

  const [openModalAddCategory, setOpenModalAddCategory] = useState(false);
  const [add_category, setAdd_category] = useState("");

  function handle_add_category() {
    dispatch(
      AddCategory({ name: add_category, category_userId: userLogin.idUser })
    );
    setAdd_category("");
    console.log("ali");
  }

  return (
    <>
      <Button
        sx={Button_Add_code}
        onClick={() => setOpenModalAddCategory(true)}
      >
        Add Category
      </Button>
      <Modal
        open={openModalAddCategory}
        onClose={() => setOpenModalAddCategory(false)}
      >
        <Box sx={Modal_Style}>
          <FormControl
            sx={{
              padding: "20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                backgroundColor: "#F8CE46",
                fontFamily: "Byekan",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                borderRadius: "20px",
                color: "#282A31",
                width: "100%",
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
                width: "80%",
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
              multiline
              maxRows={4}
            />
            <Button
              onClick={() => handle_add_category()}
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
      </Modal>
    </>
  );
}

export default Add_Category;
