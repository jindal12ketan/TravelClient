import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import nodemailer from 'nodemailer';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!email || !newPassword) {
            toast.warn('Email or New Password is missing');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`http://localhost:6060/forgotPass/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
            });

            if (response.ok) {
                console.log('Password reset successful');
                toast.success('Password updated successfully');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (response.status === 404) {
                console.log('No user found for the provided email');
                toast.error('No user found for the provided email');
                setIsLoading(false);
            } else {
                console.error('Error resetting password');
                toast.error('Error resetting password');
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error resetting password:', error.message);
            setIsLoading(false);
        }
    };
    const fieldData = [
        { name: 'email', label: 'Email', type: 'email', value: email },
        { name: 'newPassword', label: 'New Password', type: 'password', value: newPassword },
    ];
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90vh',
            }}
            className="forgot-password"
        >
            <Box
                component="form"
                onSubmit={handlePasswordReset}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '450px',
                    padding: '20px',
                    border: '1px solid',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
            >
                <Typography variant="h3" gutterBottom className="heading">
                    Forgot Password
                </Typography>
                {fieldData.map((field) => (
                    <TextField
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        value = {field.value}
                        onChange={handleInputChange}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: '10px' }}
                    />
                ))}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                    sx={{ marginBottom: '10px' }}
                >
                    {isLoading ? 'Resetting Password...' : 'Reset Password'}
                </Button>
            </Box>
            <ToastContainer />
        </Box>
    );
}

export default ForgotPassword;
