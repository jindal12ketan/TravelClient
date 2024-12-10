import { toast } from "react-toastify";

/**
 * Displays an error toast message.
 *
 * @param {string} message - The error message to display.
 */
export const handleError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
