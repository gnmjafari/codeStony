import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import React from "react";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";

function ListCodeSave() {
  const dispatch = useDispatch();
  const listCode = useSelector((state) => state.code.infoCode);
  const { RemoveCode } = codeSlice.actions;

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "200px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <SpeakerNotesIcon />
        All Codes
      </Typography>
      <Stack
        direction="column"
        justifyContent="flex-start"
        gap="100px"
        alignItems="center"
        flexWrap="wrap"
      >
        {listCode.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "90%",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <FormControl
                variant="outlined"
                sx={{
                  width: "20%",
                  height: "100%",
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "70px",
                }}
              >
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
                  disabled
                  value={item.addTitel}
                  sx={{ fontFamily: "Byekan", fontSize: "20px" }}
                  multiline
                  maxRows={4}
                  startAdornment={
                    <InputAdornment position="start">
                      <AssignmentIcon />
                    </InputAdornment>
                  }
                />
                <Button sx={{ width: "100%" }} variant="contained">
                  Edit
                </Button>
                <Button
                  onClick={() => dispatch(RemoveCode({ id: item.id }))}
                  sx={{ width: "100%" }}
                  variant="contained"
                >
                  Remove
                </Button>
              </FormControl>

              <FormControl
                variant="filled"
                sx={{
                  width: "40%",
                  borderRadius: "20px",
                  padding: "20px",
                  direction: "rtl",
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
                  متن جزوه
                </InputLabel>
                <Input
                  disabled
                  value={item.addTextSave}
                  sx={{
                    fontFamily: "Byekan",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                  multiline
                  rows={10}
                />
              </FormControl>

              <FormControl
                variant="filled"
                sx={{
                  width: "40%",
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
                  disabled
                  value={item.addCodeSave}
                  sx={{
                    fontFamily: "Byekan",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                  multiline
                  rows={10}
                />
              </FormControl>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default ListCodeSave;
