import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import img1 from "./image/1.jpg";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
} from "@mui/lab";
import { useNavigate } from "react-router-dom";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { setValue } = codeSlice.actions;
  const theme = useTheme();
  const isMatchMd = useMediaQuery(theme.breakpoints.down("md"));
  // const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isMatchSm);
  // console.log(isMatchMd);

  return (
    <>
      <div
        dir="rtl"
        style={{
          backgroundColor: "#282A31",
          height: "100%",
          paddingTop: "150px",
        }}
      >
        {isMatchMd ? (
          <>
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: "30px",
                width: "90%",
                margin: "auto",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "#F8CE46",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  textAlign: "justify",
                  gap: "30px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "700",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BeenhereIcon />
                  Code Stony
                </Typography>
                <Typography variant="h5">
                  خیلی از مواقع برای همه ما پیش آماده که جزوه ای برای برنامه
                  نویسی بنویسیم و بعد از مدتی اینقدر تعداد برگه ها و جزوه ها
                  زیاد میشه که دسترسی راحتی بهشون نداریم و حتی یادمون میره هر
                  جزوه ای برای چه کدی نوشته شده، در Code Stony شما میتونید به
                  راحتی برای هر جزوه موضوعی بنویسید و کد مربوط به اون جزوه را
                  وارد کنید و متنی که به عنوان جزوه نیاز دارید بنویسید و با سرچ
                  کردن در هر زمانی که خواستید به اون جزوه .و کدش دسترسی داشته
                  باشید
                </Typography>
              </Box>
              <CardMedia
                sx={{ width: "100%", minHeight: "400px", borderRadius: "20px" }}
                image={img1}
              ></CardMedia>
            </Card>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                textAlign: "justify",
                gap: "30px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  marginTop: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  marginBottom: "50px",
                  backgroundColor: "#fff",
                  color: "#282A31",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                حالا برای شروع باید چیکار کرد؟
              </Typography>
            </Box>
            <Timeline position="alternate" dir="ltr">
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined">
                    <PersonAddIcon
                      sx={{ color: "#fff", fontSize: "60px", padding: "5px" }}
                    />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F8CE46" }} />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "25px",
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    // component="span"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                      borderRadius: "20px",
                      width: "80%",
                      textAlign: "center",
                    }}
                  >
                    ایجاد حساب کاربری
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined">
                    <AccountCircleIcon
                      sx={{ color: "#fff", fontSize: "60px" }}
                    />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F8CE46" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: "#F8CE46", py: "25px", px: 2 }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    ورود به حساب کاربری
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined">
                    <DashboardCustomizeIcon
                      sx={{ color: "#fff", fontSize: "60px" }}
                    />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F8CE46" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: "#F8CE46", py: "25px", px: 2 }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    رفتن به قسمت داشبورد
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined">
                    <AddCircleIcon sx={{ color: "#fff", fontSize: "60px" }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F8CE46" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: "#F8CE46", py: "25px", px: 2 }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    اضافه کردن جزوه به داشبورد
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="span"
                      sx={{
                        color: "#282A31",
                        backgroundColor: "#F8CE46",
                        padding: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      تمام
                    </Typography>
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent
                  sx={{ color: "#F8CE46", py: "25px", px: 2 }}
                ></TimelineContent>
              </TimelineItem>
            </Timeline>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
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
                همین الان ثبت نام کن
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
          </>
        ) : (
          <>
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "30px",
                width: "90%",
                margin: "auto",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "#F8CE46",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  textAlign: "justify",
                  gap: "30px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "700",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BeenhereIcon />
                  Code Stony
                </Typography>
                <Typography variant="h5">
                  خیلی از مواقع برای همه ما پیش آماده که جزوه ای برای برنامه
                  نویسی بنویسیم و بعد از مدتی اینقدر تعداد برگه ها و جزوه ها
                  زیاد میشه که دسترسی راحتی بهشون نداریم و حتی یادمون میره هر
                  جزوه ای برای چه کدی نوشته شده، در Code Stony شما میتونید به
                  راحتی برای هر جزوه موضوعی بنویسید و کد مربوط به اون جزوه را
                  وارد کنید و متنی که به عنوان جزوه نیاز دارید بنویسید و با سرچ
                  کردن در هر زمانی که خواستید به اون جزوه .و کدش دسترسی داشته
                  باشید
                </Typography>
              </Box>
              <CardMedia
                sx={{ width: "50%", minHeight: "400px", borderRadius: "20px" }}
                image={img1}
              ></CardMedia>
            </Card>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                textAlign: "justify",
                gap: "30px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  marginTop: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  marginBottom: "50px",
                  backgroundColor: "#fff",
                  color: "#282A31",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                حالا برای شروع باید چیکار کرد؟
              </Typography>
            </Box>
            <Timeline position="alternate" dir="ltr">
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined">
                    <PersonAddIcon
                      sx={{ color: "#fff", fontSize: "60px", padding: "5px" }}
                    />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F8CE46" }} />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "25px",
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    ایجاد حساب کاربری
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined">
                    <AccountCircleIcon
                      sx={{ color: "#fff", fontSize: "60px" }}
                    />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F8CE46" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: "#F8CE46", py: "25px", px: 2 }}>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    ورود به حساب کاربری
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined">
                    <DashboardCustomizeIcon
                      sx={{ color: "#fff", fontSize: "60px" }}
                    />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F8CE46" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: "#F8CE46", py: "25px", px: 2 }}>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    رفتن به قسمت داشبورد
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined">
                    <AddCircleIcon sx={{ color: "#fff", fontSize: "60px" }} />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#F8CE46" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ color: "#F8CE46", py: "25px", px: 2 }}>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    اضافه کردن جزوه به داشبورد
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ minHeight: "150px" }}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      color: "#282A31",
                      backgroundColor: "#F8CE46",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="span"
                      sx={{
                        color: "#282A31",
                        backgroundColor: "#F8CE46",
                        padding: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      تمام
                    </Typography>
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent
                  sx={{ color: "#F8CE46", py: "25px", px: 2 }}
                ></TimelineContent>
              </TimelineItem>
            </Timeline>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
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
                همین الان ثبت نام کن
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
          </>
        )}
      </div>
    </>
  );
}

export default Home;
