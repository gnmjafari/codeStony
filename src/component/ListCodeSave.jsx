import {
  Box,
  Button,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Select,
  MenuItem,
  Paper,
  IconButton,
  InputBase,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import React, { useEffect, useState } from "react";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileItem from "./useComponent/ProfileItem";

function ListCodeSave() {
  const dispatch = useDispatch();
  const listCode = useSelector((state) => state.code.infoCode);
  const loginUser = useSelector((state) => state.code.userLogin.idUser);
  const show_category = useSelector((state) => state.code.category);
  const { RemoveCode, ShowEdit, EditCode } = codeSlice.actions;
  const [newAddTitel, setNewAddTitel] = useState("");
  const [newAddCodeSave, setNewAddCodeSave] = useState("");
  const [newAddTextSave, setNewAddTextSave] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [search, setSearch] = useState("");
  const [search_category, setSearch_category] = useState("");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleEdit = (ss) => {
    dispatch(
      EditCode({
        id: ss,
        edit: false,
        addTitel: newAddTitel,
        addCodeSave: newAddCodeSave,
        addTextSave: newAddTextSave,
        category: newCategory,
      })
    );
    setNewAddTitel("");
    setNewAddCodeSave("");
    setNewAddTextSave("");
    setNewCategory("");
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "-50px",
          marginBottom: "30px",
        }}
      >
        {listCode.length == 0 ? (
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              justifyContent: "center",
              color: "#282A31",
              backgroundColor: "#fff",
              width: "400px",
              margin: "auto",
              borderRadius: "20px",
              padding: "5px",
            }}
          >
            <SpeakerNotesIcon />
            "There is no code"
          </Typography>
        ) : (
          <>
            <Paper
              sx={{
                p: "5px 10px",
                display: "flex",
                alignItems: "center",
                width: "30%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Titel  Code"
                onChange={(e) => setSearch(e.target.value)}
              />
              <IconButton type="button" sx={{ p: "5px, 10px" }}>
                <ManageSearchIcon />
              </IconButton>
            </Paper>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                justifyContent: "center",
                color: "#282A31",
                backgroundColor: "#fff",
                width: "400px",
                borderRadius: "20px",
                padding: "5px",
              }}
            >
              All Codes
            </Typography>
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                m: 1,
                width: "30%",
                position: "relative",
              }}
              variant="standard"
            >
              <IconButton
                type="button"
                sx={{
                  position: "absolute",
                  color: "black",
                  left: "5px",
                  zIndex: "10",
                }}
              >
                <SpeakerNotesIcon />
              </IconButton>
              <Select
                disableUnderline="false"
                sx={{
                  width: "100%",
                  fontFamily: "Byekan",
                  fontSize: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  color: "#282A31",
                  padding: "5px 10px",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
                onChange={(e) => setSearch_category(e.target.value)}
              >
                <MenuItem value={""}>انتخاب دسته بندی</MenuItem>
                {show_category.map((item) => {
                  if (item.category_userId === loginUser) {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>;
                  }
                })}
              </Select>
            </FormControl>
          </>
        )}
      </Box>
      {listCode.map((item, index) => {
        if (item.edit) {
          return (
            <Box
              key={index}
              sx={{
                width: "100%",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <FormControl
                variant="filled"
                sx={{
                  width: "40%",
                  borderRadius: "20px",
                  padding: "20px",
                  direction: "rtl",
                  boxShadow:
                    " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                  backgroundColor: "#282A31",
                  color: "#fff",
                  ":after": {
                    color: "#fff",
                  },
                }}
              >
                <InputLabel
                  sx={{
                    fontFamily: "Byekan",
                    fontSize: "30px",
                    color: "#fff !important",
                  }}
                  htmlFor=""
                >
                  متن جزوه
                </InputLabel>
                <Input
                  onChange={(e) => setNewAddTextSave(e.target.value)}
                  value={newAddTextSave}
                  sx={{
                    fontFamily: "Byekan",
                    fontSize: "20px",
                    textAlign: "left",
                    color: "#fff",
                    ":after": {
                      borderBottom: "2px solid #fff",
                    },
                  }}
                  multiline
                  rows={10}
                />
              </FormControl>

              <Box
                variant="outlined"
                sx={{
                  width: "20%",
                  height: "100%",
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "60px",
                }}
              >
                <FormControl>
                  <Input
                    disableUnderline="false"
                    onChange={(e) => setNewAddTitel(e.target.value)}
                    value={newAddTitel}
                    sx={{
                      fontFamily: "Byekan",
                      fontSize: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    }}
                    multiline
                    maxRows={4}
                    startAdornment={
                      <InputAdornment position="start">
                        <AssignmentIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="standard" sx={{ width: "90%" }}>
                  <Select
                    value={newCategory}
                    disableUnderline="false"
                    sx={{
                      fontFamily: "Byekan",
                      fontSize: "20px",
                      width: "100%",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    }}
                    onChange={(e) => setNewCategory(e.target.value)}
                  >
                    {show_category.map((item) => {
                      if (item.category_userId === loginUser) {
                        return (
                          <MenuItem value={item.name}>{item.name}</MenuItem>
                        );
                      }
                    })}
                  </Select>
                </FormControl>

                <Button
                  onClick={() => handleEdit(item.id)}
                  sx={{
                    width: "100%",
                    color: "#fff",
                    backgroundColor: "#282A31",
                    ":hover": {
                      backgroundColor: "#fff",
                      color: "#282A31",
                    },
                  }}
                  variant="contained"
                >
                  Save
                </Button>
                <Button
                  disabled
                  onClick={() => dispatch(RemoveCode({ id: item.id }))}
                  sx={{
                    width: "100%",
                    color: "#282A31",
                    backgroundColor: "#40A4FC",
                  }}
                  variant="contained"
                >
                  Remove
                </Button>
              </Box>

              <FormControl
                variant="filled"
                sx={{
                  width: "40%",
                  borderRadius: "20px",
                  padding: "20px",
                  direction: "ltr",
                  boxShadow:
                    " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                  backgroundColor: "#282A31",
                }}
              >
                <InputLabel
                  color="info"
                  sx={{
                    fontFamily: "Byekan",
                    fontSize: "30px",
                    color: "#fff !important",
                  }}
                  htmlFor=""
                >
                  کد جزوه
                </InputLabel>
                <Input
                  onChange={(e) => setNewAddCodeSave(e.target.value)}
                  value={newAddCodeSave}
                  sx={{
                    fontFamily: "Byekan",
                    fontSize: "20px",
                    textAlign: "left",
                    ":after": {
                      borderBottom: "2px solid #fff",
                    },
                  }}
                  multiline
                  rows={10}
                />
              </FormControl>
            </Box>
          );
        }
        if (
          (search === "" || search === item.addTitel) &&
          (search_category === "" || search_category === item.category) &&
          item.userId === loginUser
        ) {
          return (
            <Accordion
              sx={{ width: "100%" }}
              expanded={expanded === `panel${item.id}`}
              onChange={handleChange(`panel${item.id}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ProfileItem
                  Title={<EventNoteOutlinedIcon sx={{ fontSize: "24px" }} />}
                  info="Note"
                  sx={{ flex: "1" }}
                  childStyle={{ fontWeight: "600" }}
                />
                <ProfileItem
                  Title="Title"
                  info={item.addTitel}
                  sx={{ flex: "1" }}
                  childStyle={{ fontWeight: "600" }}
                />
                <ProfileItem
                  Title="Category"
                  info={item.category}
                  sx={{ flex: "1" }}
                  s
                  childStyle={{ fontWeight: "600" }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    marginBottom: "30px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <FormControl
                    variant="filled"
                    sx={{
                      flex: "1",
                      borderRadius: "20px",
                      padding: "20px",
                      boxShadow:
                        " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                      backgroundColor: "#282A31",
                    }}
                  >
                    <Input
                      value={item.addTextSave}
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        textAlign: "left",
                        color: "#fff",
                        ":after": {
                          borderBottom: "2px solid #F8CE46",
                        },
                      }}
                      multiline
                      rows={10}
                    />
                  </FormControl>
                  <FormControl
                    variant="filled"
                    sx={{
                      flex: "1",
                      borderRadius: "20px",
                      padding: "20px",
                      direction: "ltr",
                      boxShadow:
                        " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                      backgroundColor: "#282A31",
                    }}
                  >
                    <Input
                      value={item.addCodeSave}
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        textAlign: "left",
                        color: "#fff",
                        ":after": {
                          borderBottom: "2px solid #F8CE46",
                        },
                      }}
                      multiline
                      rows={10}
                    />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "55px",
                  }}
                >
                  <Button
                    onClick={() =>
                      dispatch(ShowEdit({ id: item.id, edit: true }))
                    }
                    sx={{
                      // backgroundImage: "linear-gradient(#FB9886, #FC5B58)",
                      backgroundColor: "#282A31",
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "#F8CE46",
                      },
                    }}
                    variant="contained"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => dispatch(RemoveCode({ id: item.id }))}
                    sx={{
                      // backgroundImage: "linear-gradient(#FB9886, #FC5B58)",
                      backgroundColor: "#282A31",
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "#F8CE46",
                      },
                    }}
                    variant="contained"
                  >
                    Remove
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
    </>
  );
}

export default ListCodeSave;
