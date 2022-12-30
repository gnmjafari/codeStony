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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box } from "@mui/system";
import React, { useState } from "react";
import codeSlice from "./Store/CodeSlice";

function BoxCode() {
  const { addCode } = codeSlice.actions;
  const dispatch = useDispatch();
  const listCode = useSelector((state) => state.code.infoCode);

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
          value={addTitel}
          onChange={(e) => setAddTitel(e.target.value)}
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
          value={addCodeSave}
          onChange={(e) => setAddCodeSave(e.target.value)}
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
          value={addTextSave}
          onChange={(e) => setAddTextSave(e.target.value)}
          sx={{
            fontFamily: "Byekan",
            fontSize: "20px",
            textAlign: "left",
          }}
          multiline
          rows={20}
        />
      </FormControl>
      <Stack spacing={2}>
        <Button
          onClick={handleAddCode}
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
      </Stack>
    </Box>
  );
}

export default BoxCode;
