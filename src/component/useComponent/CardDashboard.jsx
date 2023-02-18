import React from "react";
import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import img2 from "../image/3.jpg";
import img3 from "../image/3.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function CardDashboard({ TitleBtn, img }) {
  return (
    <Card
      sx={{
        position: "relative",
        width: "30%",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#282A31",
        borderRadius: "15px",
        padding: "10px",
        color: "white",
      }}
    >
      <CardMedia
        sx={{
          zIndex: "1",
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          top: "0",
          bottom: "0",
          right: "0",
          left: "0",
          position: "absolute",
        }}
        image={img}
      ></CardMedia>
      <Button
        startIcon={<ArrowRightIcon />}
        variant="none"
        sx={{
          marginTop: "auto",
          alignItems: "center",
          zIndex: "2",
          gap: "10px",
          fontSize: "18px",
          backgroundColor: "#353535",
          color: "#fff",
          ":hover": {
            backgroundColor: "#282A31",
          },
        }}
      >
        {TitleBtn}
      </Button>
    </Card>
  );
}

export default CardDashboard;
