import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [otp, setOTP] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOTPSent, setIsOTPSent] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'otp') {
            setOTP(value);
        }
    };

    const handleSendOTP = async () => {
        if (!email) {
            toast.warn('Email is missing');
            return;
        }

        try {
            const response = await fetch(`http://localhost:7070/sendOTP/${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setIsOTPSent(true);
                toast.success('OTP sent successfully');
            } else if (response.status === 404) {
                toast.error('No user found for the provided email');
            } else {
                toast.error('Failed to send OTP');
            }
        } catch (error) {
            console.error('Error sending OTP:', error.message);
            toast.error('Failed to send OTP');
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!email || !newPassword || !otp) {
            toast.warn('Email, OTP, or New Password is missing');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`http://localhost:7070/verifyOTP/${email}/${otp}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const resetResponse = await fetch(`http://localhost:7070/forgotPass/${email}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ newPassword }),
                });

                if (resetResponse.ok) {
                    toast.success('Password updated successfully');
                    setTimeout(() => {
                        navigate('/login');
                    }, 1000);
                } else {
                    console.error('Error resetting password');
                    toast.error('Error resetting password');
                }
            } else if (response.status === 404) {
                console.log('Invalid OTP');
                toast.error('Invalid OTP');
            } else {
                console.error('Error verifying OTP');
                toast.error('Error verifying OTP');
            }
        } catch (error) {
            console.error('Error resetting password:', error.message);
            toast.error('Error resetting password');
        }

        setIsLoading(false);
    };

    const fieldData = [
        { name: 'email', label: 'Email', type: 'email', value: email },
        { name: 'otp', label: 'OTP', type: 'text', value: otp },
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
                        key={field.name}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        value={field.value}
                        onChange={handleInputChange}
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: '10px' }}
                        disabled={field.name === 'newPassword' && !isOTPSent}
                    />
                ))}
                {!isOTPSent && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendOTP}
                        sx={{ marginBottom: '10px' }}
                    >
                        Send OTP
                    </Button>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isLoading || !isOTPSent}
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
