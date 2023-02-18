import React from "react";
import {
  Typography,
  Button,
  StepLabel,
  Step,
  Stepper,
  Box,
  FormControl,
  Input,
  Select,
  Snackbar,
  Alert,
  MenuItem,
} from "@mui/material/";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesIcon from "@mui/icons-material/Notes";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import codeSlice from "../Store/CodeSlice";

const steps = ["Add Title & Add Category", "Add TextCode", "Add Code"];

function StepperAddCode() {
  const { addCode } = codeSlice.actions;
  const dispatch = useDispatch();
  const listCode = useSelector((state) => state.code.infoCode);
  const userId = useSelector((state) => state.code.userLogin.idUser);
  const show_category = useSelector((state) => state.code.category);

  const [addTitel, setAddTitel] = useState("");
  const [addCodeSave, setAddCodeSave] = useState("");
  const [addTextSave, setAddTextSave] = useState("");
  const [category, setCategory] = useState("");
  const [edit, setEdit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccess(false);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function handleAddCode() {
    dispatch(
      addCode({
        id: listCode.length === 0 ? 1 : listCode[listCode.length - 1].id + 1,
        addTitel,
        addCodeSave,
        addTextSave,
        category,
        edit,
        userId,
      })
    );
    setShowSuccess(true);
    setAddTitel("");
    setAddCodeSave("");
    setAddTextSave("");
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step sx={{ color: "#282A31" }} key={label} {...stepProps}>
              <StepLabel sx={{ fontSize: "25px", gap: "5px" }} {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? (
        <>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "20px",
                m: 1,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Byekan",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#F8CE46",
                  padding: "10px",
                  borderRadius: "20px",
                  color: "#282A31",
                }}
              >
                <NotesIcon fontSize="large" />
                عنوان جزوه
              </Typography>
              <Input
                disableUnderline="false"
                value={addTitel}
                onChange={(e) => setAddTitel(e.target.value)}
                sx={{
                  fontFamily: "Byekan",
                  width: "70%",
                  fontSize: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  color: "#282A31",
                  padding: "9px 14px",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
                multiline
                maxRows={4}
              />
            </FormControl>

            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                m: 1,
                minWidth: 120,
                gap: "20px",
              }}
              variant="standard"
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
                }}
              >
                <NotesIcon fontSize="large" />
                دسته بندی
              </Typography>
              <Select
                value={category}
                disableUnderline="false"
                sx={{
                  width: "300px",
                  fontFamily: "Byekan",
                  fontSize: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  color: "#282A31",
                  padding: "5px 10px",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
                onChange={(e) => setCategory(e.target.value)}
              >
                {show_category.map((item) => {
                  if (item.category_userId === userId) {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>;
                  }
                })}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                mr: 1,
                color: "#fff",
                fontSize: "20px",
                backgroundColor: "#282A31",
              }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button
                color="inherit"
                onClick={handleSkip}
                sx={{
                  mr: 1,
                  color: "#fff",
                  fontSize: "20px",
                  backgroundColor: "#282A31",
                }}
              >
                Skip
              </Button>
            )}

            <Button
              sx={{
                color: "#fff",
                fontSize: "20px",
                backgroundColor: "#282A31",
              }}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      ) : (
        ""
      )}

      {activeStep === 1 ? (
        <>
          <FormControl
            variant="filled"
            sx={{
              width: "100%",
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
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              <EventNoteIcon fontSize="large" />
              متن جزوه
            </Typography>
            <Input
              disableUnderline
              value={addTextSave}
              onChange={(e) => setAddTextSave(e.target.value)}
              sx={{
                fontFamily: "Byekan",
                fontSize: "20px",
                textAlign: "left",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow:
                  " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                padding: "10px",
                margin: "10px 20px",
                color: "#282A31",
              }}
              multiline
              rows={10}
            />
          </FormControl>
          <Box
            sx={{ display: "flex", flexDirection: "row", pt: 2, gap: "10px" }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                mr: 1,
                color: "#fff",
                fontSize: "20px",
                backgroundColor: "#282A31",
              }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button
                color="inherit"
                onClick={handleSkip}
                sx={{
                  mr: 1,
                  color: "#fff",
                  fontSize: "20px",
                  backgroundColor: "#282A31",
                }}
              >
                Skip
              </Button>
            )}

            <Button
              sx={{
                color: "#fff",
                fontSize: "20px",
                backgroundColor: "#282A31",
              }}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      ) : (
        ""
      )}

      {activeStep === 2 ? (
        <>
          <FormControl
            variant="filled"
            sx={{
              marginTop: "50px",
              width: "100%",
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
                fontWeight: "600",
              }}
            >
              متن کد
              <EventNoteIcon fontSize="large" />
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
                borderRadius: "10px",
                boxShadow:
                  " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                padding: "10px",
                color: "#282A31",
                margin: "10px 20px",
              }}
              multiline
              rows={10}
            />
          </FormControl>
          <Box
            sx={{ display: "flex", flexDirection: "row", pt: 2, gap: "10px" }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                mr: 1,
                color: "#fff",
                fontSize: "20px",
                backgroundColor: "#282A31",
              }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button
                color="inherit"
                onClick={handleSkip}
                sx={{
                  mr: 1,
                  color: "#fff",
                  fontSize: "20px",
                  backgroundColor: "#282A31",
                }}
              >
                Skip
              </Button>
            )}

            <Button
              sx={{
                color: "#fff",
                fontSize: "20px",
                backgroundColor: "#282A31",
              }}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      ) : (
        ""
      )}

      {activeStep === steps.length ? (
        <>
          <Button
            onClick={handleAddCode}
            sx={{
              fontFamily: "Byekan",
              fontSize: "25px",
              display: "flex",
              margin: "auto",
              marginTop: "50px",
              gap: "15px",
              color: "#fff",
              backgroundColor: "#282A31",
              ":hover": {
                backgroundColor: "#F8CE46",
              },
            }}
            startIcon={<AssignmentTurnedInIcon fontSize="large" />}
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
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              sx={{
                color: "#fff",
                fontSize: "20px",
                backgroundColor: "#282A31",
              }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        </>
      ) : (
        ""
      )}
    </Box>
  );
}

export default StepperAddCode;
