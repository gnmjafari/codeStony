import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Snackbar,
  Alert,
  Stack,
  Typography,
  useRadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import NotesIcon from "@mui/icons-material/Notes";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Box } from "@mui/system";
import React, { useState } from "react";
import codeSlice from "./Store/CodeSlice";

function BoxCode() {
  const { addCode } = codeSlice.actions;
  const dispatch = useDispatch();
  const listCode = useSelector((state) => state.code.infoCode);
  const userId = useSelector((state) => state.code.userLogin.idUser);

  const [addTitel, setAddTitel] = useState("");
  const [addCodeSave, setAddCodeSave] = useState("");
  const [addTextSave, setAddTextSave] = useState("");
  const [edit, setEdit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  console.log(listCode);

  function handleAddCode() {
    dispatch(
      addCode({
        id: listCode.length === 0 ? 1 : listCode[listCode.length - 1].id + 1,
        addTitel,
        addCodeSave,
        addTextSave,
        edit,
        userId,
      })
    );
    setShowSuccess(true);
    setAddTitel("");
    setAddCodeSave("");
    setAddTextSave("");
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccess(false);
  };

  return (
    <Box
      sx={{
        marginTop: "40px",
        paddingTop: "70px",
        width: "90%",
        marginRight: "auto",
        marginLeft: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "70px",
      }}
    >
      <FormControl sx={{ width: "50%" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Byekan",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#F8CE46",
            padding: "10px",
            borderRadius: "20px",
            color: "#282A31",
            width: "40%",
            margin: "auto",
            marginBottom: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <NotesIcon />
          عنوان جزوه
        </Typography>
        <Input
          disableUnderline="false"
          value={addTitel}
          onChange={(e) => setAddTitel(e.target.value)}
          sx={{
            fontFamily: "Byekan",
            fontSize: "20px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            color: "#282A31",
            padding: "5px 10px",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
          multiline
          maxRows={4}
        />
      </FormControl>

      <FormControl
        variant="filled"
        sx={{
          width: "90%",
          padding: "10px",
          direction: "ltr",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Byekan",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#F8CE46",
            padding: "10px",
            borderRadius: "20px",
            color: "#282A31",
            width: "30%",
            margin: "auto",
            marginBottom: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          متن کد
          <EventNoteIcon />
        </Typography>
        <Input
          disableUnderline="false"
          value={addCodeSave}
          onChange={(e) => setAddCodeSave(e.target.value)}
          sx={{
            fontFamily: "Byekan",
            fontSize: "20px",
            textAlign: "left",
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow:
              " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
            padding: "10px",
            color: "#282A31",
          }}
          multiline
          rows={20}
        />
      </FormControl>

      <FormControl
        variant="filled"
        sx={{
          width: "90%",
          direction: "rtl",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Byekan",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#F8CE46",
            padding: "10px",
            borderRadius: "20px",
            color: "#282A31",
            width: "30%",
            margin: "auto",
            marginBottom: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <EventNoteIcon />
          متن جزوه
        </Typography>
        <Input
          value={addTextSave}
          onChange={(e) => setAddTextSave(e.target.value)}
          sx={{
            fontFamily: "Byekan",
            fontSize: "20px",
            textAlign: "left",
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow:
              " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
            padding: "10px",
            color: "#282A31",
          }}
          multiline
          rows={20}
        />
      </FormControl>

      <Button
        onClick={handleAddCode}
        sx={{
          fontFamily: "Byekan",
          fontSize: "25px",
          display: "flex",
          gap: "15px",
          color: "#282A31",
          backgroundColor: "#F8CE46",
          ":hover": {
            backgroundColor: "#F8CE46",
          },
        }}
        startIcon={<AssignmentTurnedInIcon />}
        variant="contained"
        type="submit"
      >
        {" "}
        ذخیره اطلاعات{" "}
      </Button>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", display: "flex", gap: "10px" }}
        >
          با موفقیت اضافه گردید
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default BoxCode;
