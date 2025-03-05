// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { clearCart } from '../actions/cartActions';
// import { Container, Grid, Typography, Button, TextField } from '@mui/material';
// import Cards from 'react-credit-cards-2';
// import 'react-credit-cards-2/dist/es/styles-compiled.css';

// const Checkout = () => {
//   const dispatch = useDispatch();
//   const [cardInfo, setCardInfo] = useState({
//     holderName: '',
//     cardNumber: '',
//     cvv: '',
//     expiry: '',
//   });
//   const [focused, setFocused] = useState('');

//   const handleClear = () => {
//     dispatch(clearCart());
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setCardInfo((prevCardInfo) => ({
//       ...prevCardInfo,
//       [name]: value,
//     }));
//   };

//   const handleFocus = (name) => {
//     setFocused(name);
//   };

//   const handleCheckout = (event) => {
//     event.preventDefault();

//     // Validate card information
//     const { holderName, cardNumber, cvv, expiry } = cardInfo;
//     if (
//       !/^[a-zA-Z]+\s[a-zA-Z]+$/.test(holderName.trim()) ||
//       !/^\d{16}$/.test(cardNumber.trim()) ||
//       !/^\d{3}$/.test(cvv.trim()) ||
//       !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry.trim())
//     ) {
//       return;
//     }

//     // Reset the form fields
//     setCardInfo({
//       holderName: '',
//       cardNumber: '',
//       cvv: '',
//       expiry: '',
//     });
//     setFocused('');

//     // Display a success message or redirect to a confirmation page
//   };

//   return (
//     <Container>
//       <Typography variant="h1" gutterBottom>
//         Checkout
//       </Typography>

//       <Grid container justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <form onSubmit={handleCheckout}>
//             <Cards
//               name={cardInfo.holderName}
//               number={cardInfo.cardNumber}
//               cvc={cardInfo.cvv}
//               expiry={cardInfo.expiry}
//               focused={focused}
//               placeholders={{ name: 'Full Name' }}
//             />

//             {Object.entries(cardInfo).map(([name, value]) => (
//               <TextField
//                 key={name}
//                 id={name}
//                 name={name}
//                 label={name.charAt(0).toUpperCase() + name.slice(1)}
//                 type={name === 'cvv' ? 'password' : 'text'}
//                 value={value}
//                 onChange={handleChange}
//                 onFocus={() => setFocused(name)}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//               />
//             ))}

//             <Button variant="contained" color="primary" type="submit" fullWidth>
//               Place Order
//             </Button>
//           </form>
//         </Grid>
//       </Grid>

//       <Grid container justifyContent="center" py={3}>
//         <Grid item xs={12} md={4} textAlign="center">
//           <Button variant="contained" color="warning" size="small" onClick={handleClear}>
//             Clear Cart
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Checkout;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { clearCart } from "../actions/cartActions";
// import { Container, Grid, Typography, Button, TextField } from "@mui/material";
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";

// const Checkout = () => {
//   const dispatch = useDispatch();
//   const [cardInfo, setCardInfo] = useState({
//     holderName: "",
//     cardNumber: "",
//     cvv: "",
//     expiry: "",
//   });
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     address: "",
//   });
//   const [focused, setFocused] = useState("");

//   const handleClear = () => {
//     dispatch(clearCart());
//   };

//   const handleCardInfoChange = (event) => {
//     const { name, value } = event.target;
//     setCardInfo((prevCardInfo) => ({
//       ...prevCardInfo,
//       [name]: value,
//     }));
//   };

//   const handleUserInfoChange = (event) => {
//     const { name, value } = event.target;
//     setUserInfo((prevUserInfo) => ({
//       ...prevUserInfo,
//       [name]: value,
//     }));
//   };

//   const handleFocus = (name) => {
//     setFocused(name);
//   };

//   const handleCheckout = (event) => {
//     event.preventDefault();

//     // Validate card information
//     const { holderName, cardNumber, cvv, expiry } = cardInfo;
//     if (
//       !/^[a-zA-Z]+\s[a-zA-Z]+$/.test(holderName.trim()) ||
//       !/^\d{16}$/.test(cardNumber.trim()) ||
//       !/^\d{3}$/.test(cvv.trim()) ||
//       !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry.trim())
//     ) {
//       return;
//     }

//     // Validate user information
//     const { name, address } = userInfo;
//     if (!name.trim() || !address.trim()) {
//       return;
//     }

//     // Reset the form fields
//     setCardInfo({
//       holderName: "",
//       cardNumber: "",
//       cvv: "",
//       expiry: "",
//     });
//     setUserInfo({
//       name: "",
//       address: "",
//     });
//     setFocused("");

//     // Display a success message or redirect to a confirmation page
//   };

//   return (
//     <Container>
//       <Typography variant="h1" gutterBottom>
//         Checkout
//       </Typography>

//       <Grid container justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <form onSubmit={handleCheckout}>
//             <Cards
//               name={cardInfo.holderName}
//               number={cardInfo.cardNumber}
//               cvc={cardInfo.cvv}
//               expiry={cardInfo.expiry}
//               focused={focused}
//               placeholders={{ name: "Full Name" }}
//             />

//             {Object.entries(cardInfo).map(([name, value]) => (
//               <TextField
//                 key={name}
//                 id={name}
//                 name={name}
//                 label={name.charAt(0).toUpperCase() + name.slice(1)}
//                 type={name === "cvv" ? "password" : "text"}
//                 value={value}
//                 onChange={handleCardInfoChange}
//                 onFocus={() => setFocused(name)}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//               />
//             ))}

//             {Object.entries(userInfo).map(([name, value]) => (
//               <TextField
//                 key={name}
//                 id={name}
//                 name={name}
//                 label={name.charAt(0).toUpperCase() + name.slice(1)}
//                 type="text"
//                 value={value}
//                 onChange={handleUserInfoChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//               />
//             ))}

//             <Button variant="contained" color="primary" type="submit" fullWidth>
//               Place Order
//             </Button>
//           </form>
//         </Grid>
//       </Grid>

//       <Grid container justifyContent="center" py={3}>
//         <Grid item xs={12} md={4} textAlign="center">
//           <Button
//             variant="contained"
//             color="warning"
//             size="small"
//             onClick={handleClear}
//           >
//             Clear Cart
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Checkout;
