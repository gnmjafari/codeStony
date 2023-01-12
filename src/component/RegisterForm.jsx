import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import codeSlice from "./Store/CodeSlice";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.code.users);
  const { addUser } = codeSlice.actions;

  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  const usernameRegex = /.{6,}/;

  const [name, setname] = useState("");
  const [family, setFamily] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatpassword] = useState("");
  const [edit, setEdit] = useState(false);
  const [login, setLogin] = useState(false);

  console.log(user);

  function handleAddUser() {
    const emailRegexTest = emailRegex.test(email);
    const passwordRegexTest = passwordRegex.test(password);
    const usernameRegexTest = usernameRegex.test(username);
    if (
      emailRegexTest &&
      passwordRegexTest &&
      usernameRegexTest &&
      password == repeatPassword
    ) {
      dispatch(
        addUser({
          idUser: user.length === 0 ? 1 : user[user.length - 1].idUser + 1,
          name,
          family,
          username,
          email,
          password,
          edit,
          login,
        })
      );
      setname("");
      setFamily("");
      setUsername("");
      setEmail("");
      setPassword("");
      setRepeatpassword("");
    } else {
      return alert("اطلاعات وارد شده صحیح نمی باشد");
    }
  }

  return (
    <>
      <Box
        style={{
          backgroundColor: "#282A31",
          height: "100Vh",
          paddingTop: "120px",
        }}
      >
        <Box
          style={{
            backgroundColor: "#fff",
            width: "80%",
            margin: "auto",
            padding: "20px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#282A31",
              padding: "20px",
              borderRadius: "20px",
              fontWeight: "600",
            }}
          >
            Code Stony
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "40px",
            }}
          >
            <TextField
              value={name}
              onChange={(e) => setname(e.target.value)}
              sx={{ width: "40%" }}
              label="Name"
              type="text"
            />
            <TextField
              value={family}
              onChange={(e) => setFamily(e.target.value)}
              sx={{ width: "40%" }}
              label="Family"
              type="text"
            />
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ width: "40%" }}
              label="Username"
              type="username"
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "40%" }}
              label="Email"
              type="email"
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: "40%" }}
              label="Password"
              type="password"
            />
            <TextField
              value={repeatPassword}
              onChange={(e) => setRepeatpassword(e.target.value)}
              sx={{ width: "40%" }}
              label="Repeat Password"
              type="password"
            />
          </Box>
          <Button
            onClick={() => handleAddUser()}
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
            ثبت نام
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default RegisterForm;
