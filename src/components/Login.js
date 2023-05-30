import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/userSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@mui/material';

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [lock, setLock] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          dispatch(setUser(JSON.parse(storedUser)));
          navigate('/');
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
          toast.warn('Email or Password is missing');
          setIsLoading(false);
          return;
        }
      
        try {
          const response = await fetch('http://localhost:6060/users', {
            method: 'GET',
          });
      
          if (response.ok) {
            const users = await response.json();
            const user = users.find((user) => user.email === credentials.email);
      
            if (user && user.password === credentials.password) {
              // Set user in local storage
              localStorage.setItem('user', JSON.stringify(user));
              dispatch(setUser(user));
              console.log('Login successful');
              setLock(false);
              setTimeout(() => {
                navigate('/');
              }, 1000);
            } else {
              console.log('Invalid email or password. Please try again.');
              setIsLoading(false);
            }
          } else {
            console.error('Error retrieving user data');
          }
        } catch (error) {
          console.error('Error logging in:', error.message);
        }
      };

    //   const handleLogout = () => {
    //     dispatch(clearUser());
    //     navigate('/login');
    //   };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90vh',
            }}
            className="login"
        >
            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '400px',
                    padding: '20px',
                    border: '1px solid',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
            >
                <Typography variant="h3" gutterBottom className="heading">
                    Login
                    {lock ? <LockOutlinedIcon sx={{ fontSize: 40 }} /> : <LockOpenOutlinedIcon sx={{ fontSize: 40 }} />}
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '10px' }}
                />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '10px' }}
                />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Link to="/forgotPassword">Forgot Password</Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isLoading}
                            sx={{ marginBottom: '10px' }}
                        >
                            {isLoading ? 'Logging In...' : 'Login'}
                        </Button>
                    </Grid>
                    <Link to="/registration">New User Registration</Link>
                </Grid>
            </Box>
            <ToastContainer />
        </Box>
    );
}

export default Login;