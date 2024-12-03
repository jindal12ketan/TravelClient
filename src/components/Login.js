import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid } from "@mui/material";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lock, setLock] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
      navigate("/");
    }
  }, [dispatch, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!credentials.email || !credentials.password) {
      toast.warn("Email or Password is missing");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:7070/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      if (res.ok) {
        // Set user in local storage
        const data = await res.json();
        console.log(data);
        localStorage.setItem("user", data);
        dispatch(setUser(data));
        setLock(false);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/");
        }, 1000);
      } else {
        setIsLoading(false);
        console.error("Error retrieving user data");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error logging in:", error.message);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
      }}
      className="login"
    >
      <Box
        sx={{
          display: "flex",
          fontSize: "50px",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
          color: "#ffffff",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        Travel Genix
      </Box>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
          padding: "20px",
          border: "1px solid",
          borderRadius: "5px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "#3b5998" }}>
          Login
          {lock ? (
            <LockOutlinedIcon sx={{ fontSize: 40 }} />
          ) : (
            <LockOpenOutlinedIcon sx={{ fontSize: 40 }} />
          )}
        </Typography>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <Grid container spacing={2}>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              sx={{ marginBottom: "10px", width: "450px" }}
            >
              {isLoading ? "Logging In..." : "Login"}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Link to="/forgotPassword">Forgot Password</Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/registration">New User Registration</Link>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default Login;
