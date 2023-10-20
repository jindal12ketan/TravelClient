// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, clearCart, addToCart, decrementQuantity } from "../actions/cartActions";
// import { Container, Grid, Button, Alert, TextField, Typography, TableRow, TableCell } from "@mui/material";

// const Cart = () => {
//   const cartItems = useSelector(({ cart }) => cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [coupon, setCoupon] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [appliedCoupon, setAppliedCoupon] = useState(false);
//   const loggedInUser = useSelector(state => state.user.user);
//   console.log(loggedInUser);

//   const handleRemove = (itemId) => {
//     dispatch(removeFromCart(itemId, cartItems));
//   };

//   const handleClear = () => {
//     dispatch(clearCart());
//   };

//   const calculateTotal = (items) => {
//     return items.reduce((total, { count, price }) => {
//       return count > 0 ? total + price * count : total;
//     }, 0);
//   };
//   const [originalTotal, setOriginalTotal] = useState(calculateTotal(cartItems));
//   const [total, setTotal] = useState(originalTotal);

//   useEffect(() => {
//     setOriginalTotal(calculateTotal(cartItems));
//     setTotal(calculateTotal(cartItems));
//   }, [cartItems]);

//   const renderCartItem = (item, index) => {
//     const { id, title, price, count, image } = item;
//     const totalPrice = price * count;

//     const handleIncrement = () => {
//       dispatch(addToCart({ id, title, price, image }, cartItems));
//     };

//     const handleDecrement = () => {
//       dispatch(decrementQuantity(id, cartItems));
//     };

//     return (
//       <TableRow key={`${index}-${id}`}>
//         <TableCell>
//           <img src={image} alt={title} width="100" />
//         </TableCell>
//         <TableCell>
//           <Typography variant="h6">{title}</Typography>
//           <Typography className="text-muted">${price}</Typography>
//         </TableCell>
//         <TableCell>
//           <Button
//             variant="outlined"
//             size="small"
//             onClick={handleDecrement}
//             disabled={count === 0}
//           >
//             -
//           </Button>
//           <Typography component="span" className="mx-2">{count}</Typography>
//           <Button variant="outlined" size="small" onClick={handleIncrement}>
//             +
//           </Button>
//         </TableCell>
//         <TableCell>${totalPrice}</TableCell>
//         <TableCell>
//           <Button variant="outlined" color="error" size="small" onClick={() => handleRemove(id)}>
//             Remove
//           </Button>
//         </TableCell>
//       </TableRow>
//     );
//   };

//   const renderedCartItems = cartItems.filter((item) => item.count > 0).map(renderCartItem);

//   const couponDiscounts = {
//     EXAMPLECOUPON: 10,
//     ANOTHERCOUPON: 15,
//     SPECIALOFFER: 20,
//   };

//   const handleCouponSubmit = (event) => {
//     event.preventDefault();

//     if (coupon in couponDiscounts && !appliedCoupon) {
//       const discountPercentage = couponDiscounts[coupon];
//       let discount = (total * discountPercentage) / 100;

//       const discountedTotal = total - discount;

//       setTotal(discountedTotal);
//       setErrorMessage("");
//       setAppliedCoupon(true);
//     } else {
//       setErrorMessage("Invalid coupon");
//     }
//   };

//   const handleRemoveCoupon = () => {
//     setTotal(originalTotal);
//     setAppliedCoupon(false);
//   };

//   const handleCheckout = () => {
//     if (cartItems.length === 0) {
//       navigate("/products");
//       return null;
//     } else if (loggedInUser) {
//       navigate("/checkout");
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <Container>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={8}>
//           <h1 className="my-4">My Cart</h1>
//           {renderedCartItems}
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <form onSubmit={handleCouponSubmit}>
//             <TextField
//               label="Discount Coupon"
//               variant="outlined"
//               value={coupon}
//               onChange={(e) => setCoupon(e.target.value)}
//               fullWidth
//             />
//             <Button variant="contained" type="submit" disabled={appliedCoupon}>
//               Apply Coupon
//             </Button>
//           </form>

//           {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//           {appliedCoupon && (
//             <Button variant="outlined" color="secondary" onClick={handleRemoveCoupon}>
//               Remove Coupon
//             </Button>
//           )}

//           <Grid container spacing={3} className="py-3">
//             <Grid item xs={12} sm={6} md={4} className="text-center">
//               <p className="lead">
//                 Total: <strong>${total}</strong>
//               </p>
//               <Button variant="warning" size="small" onClick={handleClear}>
//                 Clear Cart
//               </Button>
//               <Button onClick={handleCheckout}>Checkout</Button>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, addToCart, decrementQuantity } from "../actions/cartActions";
import { Container, Grid, Button, Alert, TextField, Typography, TableRow, TableCell } from "@mui/material";

const Cart = () => {
  const cartItems = useSelector(({ cart }) => cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const loggedInUser = useSelector(state => state.user.user);
  console.log(loggedInUser);

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId, cartItems));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const calculateTotal = (items) => {
    return items.reduce((total, { count, price }) => {
      return count > 0 ? total + price * count : total;
    }, 0);
  };
  const [originalTotal, setOriginalTotal] = useState(calculateTotal(cartItems));
  const [total, setTotal] = useState(originalTotal);

  useEffect(() => {
    setOriginalTotal(calculateTotal(cartItems));
    setTotal(calculateTotal(cartItems));
  }, [cartItems]);

  const renderCartItem = (item, index) => {
    const { id, title, price, count, image } = item;
    const totalPrice = price * count;

    const handleIncrement = () => {
      dispatch(addToCart({ id, title, price, image }, cartItems));
    };

    const handleDecrement = () => {
      dispatch(decrementQuantity(id, cartItems));
    };

    return (
      <TableRow key={`${index}-${id}`}>
        <TableCell>
          <img src={image} alt={title} width="100" />
        </TableCell>
        <TableCell>
          <Typography variant="h6">{title}</Typography>
          <Typography className="text-muted">${price}</Typography>
        </TableCell>
        <TableCell>
          <Button
            variant="outlined"
            size="small"
            onClick={handleDecrement}
            disabled={count === 0}
          >
            -
          </Button>
          <Typography component="span" className="mx-2">{count}</Typography>
          <Button variant="outlined" size="small" onClick={handleIncrement}>
            +
          </Button>
        </TableCell>
        <TableCell>${totalPrice}</TableCell>
        <TableCell>
          <Button variant="outlined" color="error" size="small" onClick={() => handleRemove(id)}>
            Remove
          </Button>
        </TableCell>
      </TableRow>
    );
  };

  const renderedCartItems = cartItems.filter((item) => item.count > 0).map(renderCartItem);

  const couponDiscounts = {
    EXAMPLECOUPON: 10,
    ANOTHERCOUPON: 15,
    SPECIALOFFER: 20,
  };

  const handleCouponSubmit = (event) => {
    event.preventDefault();

    if (coupon in couponDiscounts && !appliedCoupon) {
      const discountPercentage = couponDiscounts[coupon];
      let discount = (total * discountPercentage) / 100;

      const discountedTotal = total - discount;

      setTotal(discountedTotal);
      setErrorMessage("");
      setAppliedCoupon(true);
    } else {
      setErrorMessage("Invalid coupon");
    }
  };

  const handleRemoveCoupon = () => {
    setTotal(originalTotal);
    setAppliedCoupon(false);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      navigate("/products");
      return null;
    } else if (loggedInUser) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  const handleTotalChange = () => {
    const additionalCharge = total > 12000 ? 500 : 0;
    const updatedTotal = total + additionalCharge;
    return updatedTotal.toFixed(2); // Round the total to two decimal places
  };

  return (
    <Container >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <h1 className="my-4">My Cart</h1>
          {renderedCartItems}
        </Grid>
        <Grid item xs={12} md={4}>
          <form onSubmit={handleCouponSubmit}>
            <TextField
              label="Discount Coupon"
              variant="outlined"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              fullWidth
            />
            <Button variant="contained" type="submit" disabled={appliedCoupon}>
              Apply Coupon
            </Button>
          </form>

          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

          {appliedCoupon && (
            <Button variant="outlined" color="secondary" onClick={handleRemoveCoupon}>
              Remove Coupon
            </Button>
          )}

          <Grid container spacing={3} className="py-3">
            <Grid item xs={12} sm={6} md={12} className="text-center">
              <p className="lead">
                Total: <strong>${handleTotalChange()}</strong>
                {total > 12000 && (
                  <span style={{ fontSize: "0.8rem", color: "red" }}>
                    (Includes additional charge of $500)
                  </span>
                )}
              </p>
              <Button variant="warning" size="small" onClick={handleClear}>
                Clear Cart
              </Button>
              <Button onClick={handleCheckout}>Checkout</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;

