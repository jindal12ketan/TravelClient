import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";
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
import { handleError } from "../utils/handleError";
import { loginStore } from "slices/loginSlice";
import { useLoginMutation } from "api/login";
import { get } from "utils/lodash";

const Login = () => {
  const [localState, setLocalState] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    {
      isLoading: false,
      lock: true,
      email: "",
      password: "",
    }
  );
  const { email, password, isLoading, lock } = localState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(storedUser));
      navigate("/");
    }
  }, [dispatch, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalState({ [name]: value });
  };

  const handleLogin = async (e) => {
    const payload = { email, password };
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Email or Password is missing");
      return;
    }
    login(payload)
      .unwrap()
      .then((res) => {
        console.log(res);
        const token = get(res, "token", "");
        const user = get(res, "user", "");
        dispatch(loginStore({ token, user }));
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch(handleError);
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
          value={email}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={password}
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
};

export default Login;
