import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import { googleLogout, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import globalContext from "../context/context";
import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicAlerts from "./authmessage";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import "../login/auth.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

async function Authen(userdatas, setError, setMessage) {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmH3375P8xp9Um3ITl2tQEYxfWoM_kkHw",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdatas),
    }
  );
  if (!response.ok) {
    // setError(true)
    const data = await response.json();
    setError(true);
    setMessage(data.error.message);
  }

  if (response.ok) {
    const data = await response.json();
    setError(false);
    setMessage("");
  }
}

export default function SignIn() {
  let navaa = useNavigate();
  let navamas = useNavigate();
  let navasign = useNavigate();
  let value = useContext(globalContext)
// console.log(value)
  let token = Cookies.get("token");
  useEffect(() => {
    if (token !== undefined) {
      return navaa("/");
    }
  }, []);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function googlesuccess(res) {
    let decode = jwt_decode(res.credential);
    // value.setgoogledata(decode)
    Cookies.set("token", true, { expires: 30 });
    Cookies.set("userinfo", JSON.stringify(decode), { expires: 30 });

    console.log(decode);

    return navamas("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const data = new FormData(event.currentTarget);
    const details = {
      email: data.get("email"),
      password: data.get("password"),
      returnSecureToken: true,
    };
    //    alert("wfwefrw fewfw")
    Authen(details, setError, setMessage);
  };

  function authmessage() {
    if (error === true) {
      return (
        <Stack
          className="abc"
          style={{ margin: "20px", width: "100%" }}
          sx={{ width: "100%" }}
          spacing={2}
        >
          <Alert variant="outlined" severity="error">
            {message}
          </Alert>
        </Stack>
      );
    }

    if (error === false) {
      //     let navaa = useNavigate()
      // navaa("/signup")
      navasign("/signup");
      return (
        <Stack
          className="abc"
          style={{ margin: "20px", width: "100%" }}
          sx={{ width: "100%" }}
          spacing={2}
        >
          <Alert variant="outlined" severity="success">
            your Email is Registered please signin again
          </Alert>
        </Stack>
      );
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Account
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="I Agree Terms & Conditions"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    "Already have an account? Sign in"
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {authmessage()}
        </Container>
      </ThemeProvider>

      <div className="logingoogle largegoogle">
        <GoogleLogin
          width="400px"
          size="large"
          onSuccess={(res) => googlesuccess(res)}
          onError={() => console.log("error")}
        />
      </div>

      <div className="logingoogle smallgoogle">
        <GoogleLogin
          onSuccess={(res) => googlesuccess(res)}
          onError={() => console.log("error")}
        />
      </div>
    </div>
  );
}
