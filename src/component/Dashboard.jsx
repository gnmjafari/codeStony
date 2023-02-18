import {
  Box,
  Typography,
  Button,
  FormControl,
  Input,
  Card,
  CardHeader,
  Avatar,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import ListCodeSave from "./ListCodeSave";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Add_Category from "./Add_Category";
import CardDashboard from "./useComponent/CardDashboard";
import img2 from "../component/image/2.jpg";
import img3 from "../component/image/3.jpg";
import img5 from "../component/image/5.jpg";
import ProfileItem from "./useComponent/ProfileItem";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import StepperAddCode from "./AddCode/StepperAddCode";

function Dashboard() {
  const { AddCategory } = codeSlice.actions;
  const listcode = useSelector((state) => state.code.infoCode);
  const show_category = useSelector((state) => state.code.category);
  const userLogin = useSelector((state) => state.code.userLogin);
  const logiin = useSelector((state) => state.code.users);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [add_category, setAdd_category] = useState("");

  console.log(userLogin);
  console.log(show_category);

  function handle_add_category() {
    dispatch(
      AddCategory({ name: add_category, category_userId: userLogin.idUser })
    );
    setAdd_category("");
    console.log("ali");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxHeight: "100%",
        width: "100%",
        // backgroundColor: "#100C08",
        backgroundColor: "#282A31",
        paddingTop: "50px",
        direction: "rtl",
        paddingRight: "300px",
        paddingLeft: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
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
          <Card
            sx={{
              backgroundColor: "#F8CE46",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#353535" }} aria-label="avatar">
                  Aj
                </Avatar>
              }
            />
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "70px",
                padding: "24px",
              }}
            >
              <ProfileItem
                Title="Name"
                info={userLogin.name}
                sx={{ fontSize: "17px" }}
                childStyle={{ fontWeight: "600" }}
              />
              <ProfileItem
                Title="Last Name"
                info={userLogin.family}
                sx={{ fontSize: "17px" }}
                childStyle={{ fontWeight: "600" }}
              />
              <ProfileItem
                Title="Email"
                info={userLogin.email}
                sx={{ fontSize: "17px" }}
                childStyle={{ fontWeight: "600" }}
              />
              <ProfileItem
                sx={{ fontSize: "17px" }}
                childStyle={{ fontWeight: "600" }}
                Title="All Code"
                info={
                  listcode.filter((item) => item.userId === userLogin.idUser)
                    .length
                }
              />
            </CardContent>
          </Card>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              width: "100%",
              color: "#fff",
            }}
          >
            <CardDashboard TitleBtn="Add New Category" img={img5} />
            <CardDashboard TitleBtn="Add New Note" img={img3} />
            <CardDashboard TitleBtn="Show All Note" img={img2} />
          </Box>

          <Card
            sx={{
              backgroundColor: "#F8CE46",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px 16px",
              gap: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginRight: "16px",
              }}
            >
              <CategoryOutlinedIcon fontSize="large" />
              Add New Category
            </Typography>
            <Input
              onChange={(e) => setAdd_category(e.target.value)}
              value={add_category}
              disableUnderline="false"
              placeholder="Add New Category"
              sx={{
                width: "60%",
                fontFamily: "Byekan",
                fontSize: "20px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                color: "#282A31",
                padding: "5px 10px",
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
                padding: "0px 20px",
                gap: "10px",
                backgroundColor: "#282A31",
                fontSize: "25px",
                color: "#fff",
                ":hover": {
                  backgroundColor: "#282A31",
                },
              }}
            >
              ثبت کن
            </Button>
          </Card>

          <Card
            sx={{
              backgroundColor: "#F8CE46",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px 16px",
              gap: "20px",
            }}
          >
            <StepperAddCode />
          </Card>

          <Card
            sx={{
              marginTop: "30px",
              backgroundColor: "#F8CE46",
              display: "flex",
              flexDirection: "column",
              padding: "24px 16px",
              overflow: "visible",
            }}
          >
            <ListCodeSave />
          </Card>
        </>
      )}
      ;
    </Box>
  );
}

export default Dashboard;
