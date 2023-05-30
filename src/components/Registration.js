import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:6060/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                console.log('Registration successful');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                setError('Registration failed. Please try again.');
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
            setError('Error during registration. Please try again.');
            setIsLoading(false);
        }
    };

    const fieldData = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
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
            className="registration"
        >
            <Typography variant="h2" gutterBottom className="heading">
                Registration
            </Typography>
            <Box
                component="form"
                onSubmit={handleRegistration}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '800px',
                    padding: '20px',
                    border: '1px solid',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
            >
                {fieldData.map((field) => (
                    <TextField
                        key={field.name}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        variant="outlined"
                        fullWidth
                        required
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
                    {isLoading ? 'Registering...' : 'Register'}
                </Button>
                {error && (
                    <Typography color="error" sx={{ marginBottom: '10px' }}>
                        {error}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default Registration;      
