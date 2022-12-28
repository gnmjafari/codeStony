import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box } from "@mui/system";
import React from "react";

function BoxCode() {
  return (
    <Box
      mt={15}
      sx={{
        width: "90%",
        marginRight: "auto",
        marginLeft: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <FormControl variant="outlined" sx={{ width: "50%" }}>
        <InputLabel
          color="info"
          sx={{
            fontFamily: "Byekan",
            fontSize: "22px",
          }}
          htmlFor=""
        >
          عنوان جزوه
        </InputLabel>
        <Input
          sx={{ fontFamily: "Byekan", fontSize: "20px" }}
          multiline
          maxRows={4}
          startAdornment={
            <InputAdornment position="start">
              <AssignmentIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl
        variant="filled"
        sx={{
          width: "90%",
          borderRadius: "20px",
          padding: "20px",
          direction: "ltr",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
        }}
      >
        <InputLabel
          color="info"
          sx={{
            fontFamily: "Byekan",
            fontSize: "30px",
          }}
          htmlFor=""
        >
          کد جزوه
        </InputLabel>
        <Input
          sx={{
            fontFamily: "Byekan",
            fontSize: "20px",
            textAlign: "left",
          }}
          multiline
          rows={20}
        />
      </FormControl>

      <FormControl
        variant="filled"
        sx={{
          width: "90%",
          borderRadius: "20px",
          padding: "20px",
          direction: "rtl",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
          marginTop: "50px",
        }}
      >
        <InputLabel
          color="info"
          sx={{
            fontFamily: "Byekan",
            fontSize: "30px",
          }}
          htmlFor=""
        >
          متن جزوه
        </InputLabel>
        <Input
          sx={{
            fontFamily: "Byekan",
            fontSize: "20px",
            textAlign: "left",
          }}
          multiline
          rows={20}
        />
      </FormControl>
      <Button
        sx={{
          fontFamily: "Byekan",
          fontSize: "25px",
          display: "flex",
          gap: "15px",
        }}
        startIcon={<AssignmentTurnedInIcon />}
        variant="contained"
        type="submit"
      >
        {" "}
        ذخیره اطلاعات{" "}
      </Button>
    </Box>
  );
}

export default BoxCode;
