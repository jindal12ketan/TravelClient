import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Constants from "Constants";
const { SERVER_URL } = Constants;

function ForgotPassword() {
  const navigate = useNavigate();
  const [localState, setLocalState] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    {
      email: "",
      newPassword: "",
      otp: "",
      isLoading: false,
      isOTPSent: false,
    }
  );
  const { email, newPassword, otp, isLoading, isOTPSent } = localState;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalState({ [name]: value });
  };

  const handleSendOTP = async () => {
    if (!email) {
      toast.warn("Email is missing");
      return;
    }

    try {
      const response = await fetch(`${SERVER_URL}/otp/sendOTP/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setLocalState({ isOTPSent: true });
        toast.success("OTP sent successfully");
      } else if (response.status === 404) {
        toast.error("No user found for the provided email");
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error.message);
      toast.error("Failed to send OTP");
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLocalState({ isLoading: true });

    if (!email || !newPassword || !otp) {
      toast.warn("Email, OTP, or New Password is missing");
      setLocalState({ isLoading: false });
      return;
    }

    try {
      const response = await fetch(
        `${SERVER_URL}/otp/verifyOTP/${email}/${otp}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const resetResponse = await fetch(
          `${SERVER_URL}/users/forgotPassword/${email}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ newPassword }),
          }
        );

        if (resetResponse.ok) {
          toast.success("Password updated successfully");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          console.error("Error resetting password");
          toast.error("Error resetting password");
        }
      } else if (response.status === 404) {
        console.log("Invalid OTP");
        toast.error("Invalid OTP");
      } else {
        console.error("Error verifying OTP");
        toast.error("Error verifying OTP");
      }
    } catch (error) {
      console.error("Error resetting password:", error.message);
      toast.error("Error resetting password");
    }

    setLocalState({ isLoading: false });
  };

  const fieldData = [
    { name: "email", label: "Email", type: "email", value: email },
    { name: "otp", label: "OTP", type: "text", value: otp },
    {
      name: "newPassword",
      label: "New Password",
      type: "password",
      value: newPassword,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
      }}
      className="forgot-password"
    >
      <Box
        component="form"
        onSubmit={handlePasswordReset}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "450px",
          padding: "20px",
          border: "1px solid",
          borderRadius: "5px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
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
            sx={{ marginBottom: "10px" }}
            disabled={field.name === "newPassword" && !isOTPSent}
          />
        ))}
        {!isOTPSent && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendOTP}
            sx={{ marginBottom: "10px" }}
          >
            Send OTP
          </Button>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading || !isOTPSent}
          sx={{ marginBottom: "10px" }}
        >
          {isLoading ? "Resetting Password..." : "Reset Password"}
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default ForgotPassword;
