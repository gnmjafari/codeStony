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
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import React, { useEffect, useState } from "react";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";

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
  console.log(search);

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
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "200px",
          marginBottom: "50px",
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
              // backgroundImage: "linear-gradient(#FB9886, #FC5B58)",
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
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Titel  Code"
                // inputProps={{ "aria-label": "search google maps" }}
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
                // backgroundImage: "linear-gradient(#FB9886, #FC5B58)",
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
                minWidth: 120,
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
                  width: "400px",
                  fontFamily: "Byekan",
                  fontSize: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  color: "#282A31",
                  padding: "5px 10px",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
              >
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
      <Stack
        direction="column"
        justifyContent="flex-start"
        gap="100px"
        alignItems="center"
        flexWrap="wrap"
      >
        {listCode.map((item, index) => {
          if (item.edit) {
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
                    <InputLabel
                      color="info"
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "22px",
                        color: "#fff",
                      }}
                      htmlFor=""
                    >
                      عنوان جزوه
                    </InputLabel>
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
                  <FormControl variant="standard" sx={{ width: "80%" }}>
                    <Select
                      value={newCategory}
                      disableUnderline="false"
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        width: "100%",
                        backgroundColor: "#F8CE46",
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
                      color: "#282A31",
                      backgroundColor: "#40A4FC",
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
                    direction: "rtl",
                    boxShadow:
                      " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                    backgroundColor: "#fff",
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
                    onChange={(e) => setNewAddTextSave(e.target.value)}
                    value={newAddTextSave}
                    sx={{
                      fontFamily: "Byekan",
                      fontSize: "20px",
                      textAlign: "left",
                      color: "black",
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
                    backgroundColor: "#fff",
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
                    onChange={(e) => setNewAddCodeSave(e.target.value)}
                    value={newAddCodeSave}
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
          }
          if (
            (search === "" || search === item.addTitel) &&
            item.userId === loginUser
          ) {
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
                <Box
                  sx={{
                    width: "20%",
                    height: "100%",
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "55px",
                  }}
                >
                  <FormControl sx={{ width: "100%" }}>
                    <Input
                      disabled
                      value={item.addTitel}
                      sx={{
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        backgroundColor: "#F8CE46",
                        borderRadius: "10px",
                        width: "100%",
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

                  <FormControl variant="standard" sx={{ width: "100%" }}>
                    <Select
                      value={item.category}
                      disableUnderline="false"
                      sx={{
                        width: "100%",
                        fontFamily: "Byekan",
                        fontSize: "20px",
                        backgroundColor: "#F8CE46",
                        borderRadius: "10px",
                      }}
                      disabled
                    >
                      <MenuItem value={item.category}>{item.category}</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    onClick={() =>
                      dispatch(ShowEdit({ id: item.id, edit: true }))
                    }
                    sx={{
                      width: "100%",
                      backgroundImage: "linear-gradient(#FB9886, #FC5B58)",
                      color: "#fff",
                    }}
                    variant="contained"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => dispatch(RemoveCode({ id: item.id }))}
                    sx={{
                      width: "100%",
                      backgroundImage: "linear-gradient(#FB9886, #FC5B58)",
                      color: "#fff",
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
                    direction: "rtl",
                    boxShadow:
                      " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                    backgroundColor: "#F8CE46",
                  }}
                >
                  <Input
                    disabled
                    value={item.addTextSave}
                    sx={{
                      fontFamily: "Byekan",
                      fontSize: "20px",
                      textAlign: "left",
                      color: "#fff",
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
                    backgroundColor: "#F8CE46",
                  }}
                >
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
          }
        })}
      </Stack>
    </>
  );
}

export default ListCodeSave;
