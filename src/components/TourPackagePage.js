// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../actions/cartActions';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Button } from '@mui/material';
// import Travdata from './Travdata';
// import GoogleMap from './GoogleMap';
// import Weather from './Weather';

// const TourPackagePage = () => {
//   const location = useLocation();
//   const { product } = location.state || {};
//   const { items } = useSelector((state) => state.cart);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleClick = () => {
//     dispatch(addToCart(product, items));
//   };

//   if (!product) {
//     // Handle the case when the data is missing or null
//     navigate('/error-page');
//     return null;
//   }

//   const getRandomItems = (array, count) => {
//     const shuffledArray = array.sort(() => 0.5 - Math.random());
//     return shuffledArray.slice(0, count);
//   };
//   let similarProducts = Travdata.filter(
//     (item) =>
//       item.category === product.category &&
//       item.id !== product.id &&
//       Math.abs(item.price - product.price) <= 1000 // Adjust the price range as needed
//   );
//   if (similarProducts.length === 0) {
//     similarProducts = Travdata.filter(
//       (item) => item.category === product.category && item.id !== product.id
//     );
//   }
//   const randomSimilarProducts = getRandomItems(similarProducts, 3);
//   return (
//     <div className="container py-4">
//       <h2 className="mb-4">Product Details</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <img src={product.image} alt="Product" className="img-fluid rounded" />
//         </div>
//         <div className="col-md-6">
//           <h3 className="mb-3">Price: ${product.price}</h3>
//           <h3 className="mb-3">Description:</h3>
//           <p>{product.description}</p>
//           <div className="mt-4">
//             <h5>Specifications:</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <strong>Package Name:</strong> {product.title}
//               </li>
//               <li>
//                 <strong>Category:</strong> {product.category}
//               </li>
//             </ul>
//           </div>
//           <div className="mt-4">
//             <Button
//               className="btn btn-primary me-3"
//               variant="contained"
//               size="medium"
//               onClick={handleClick}
//             >
//               <AddShoppingCartIcon className="me-2" />
//               Add to Cart
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="row mt-4">
//         <div className="col-md-6">
//           <h4>Customer Reviews</h4>
//           {product.reviews && product.reviews.length > 0 ? (
//             product.reviews.map((review, index) => (
//               <div key={index} className="card my-3">
//                 <div className="card-body">
//                   <h5 className="card-title">Rating: {review.rating}</h5>
//                   <p className="card-text">Customer: {review.customerName}</p>
//                   <p className="card-text">{review.comment}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="mt-4">
//               <h5>No Reviews Available</h5>
//             </div>
//           )}
//         </div>
//         <div className="col-md-6">
//           <h4>Location</h4>
//           <div className="card">
//             <div className="card-body">
//               <GoogleMap location={product.location} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Weather coords={product.location}/>
//       <hr />
//       <div className="mt-4">
//         <h4>Similar Products</h4>
//         <div className="row">
//           {randomSimilarProducts.map((similarProduct) => (
//             <div className="col-md-4" key={similarProduct.id}>
//               <a
//                 onClick={() =>
//                   navigate('/tourpackage', { state: { product: similarProduct } })
//                 }
//               >
//                 <img
//                   src={similarProduct.image}
//                   alt={similarProduct.title}
//                   className="img-fluid rounded"
//                 />
//               </a>
//               <h3>${similarProduct.price}</h3>
//               <p className="mt-2">{similarProduct.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourPackagePage;

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../actions/cartActions';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Button, TextField } from '@mui/material';
// import Travdata from './Travdata';
// import GoogleMap from './GoogleMap';
// import Weather from './Weather';

// const TourPackagePage = () => {
//   const location = useLocation();
//   const { product } = location.state || {};
//   const { items } = useSelector((state) => state.cart);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleClick = () => {
//     dispatch(addToCart(product, items));
//   };

//   const [comment, setComment] = useState('');
//   const [rating, setRating] = useState(0);
//   const [reviews, setReviews] = useState(product.reviews || []);

//   const handleAddReview = () => {
//     const newReview = { rating, comment, customerName: 'Anonymous' }; // You can modify this to capture the customer's name
//     setReviews((prevReviews) => [...prevReviews, newReview]);
//     setComment('');
//     setRating(0);
//   };

//   if (!product) {
//     // Handle the case when the data is missing or null
//     navigate('/error-page');
//     return null;
//   }

//   return (
//     <div className="container py-4">
//       <h2 className="mb-4">Product Details</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <img src={product.image} alt="Product" className="img-fluid rounded" />
//         </div>
//         <div className="col-md-6">
//           <h3 className="mb-3">Price: ${product.price}</h3>
//           <h3 className="mb-3">Description:</h3>
//           <p>{product.description}</p>
//           <div className="mt-4">
//             <h5>Specifications:</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <strong>Package Name:</strong> {product.title}
//               </li>
//               <li>
//                 <strong>Category:</strong> {product.category}
//               </li>
//             </ul>
//           </div>
//           <div className="mt-4">
//             <Button
//               className="btn btn-primary me-3"
//               variant="contained"
//               size="medium"
//               onClick={handleClick}
//             >
//               <AddShoppingCartIcon className="me-2" />
//               Add to Cart
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="row mt-4">
//         <div className="col-md-6">
//           <h4>Customer Reviews</h4>
//           {reviews && reviews.length > 0 ? (
//             reviews.map((review, index) => (
//               <div key={index} className="card my-3">
//                 <div className="card-body">
//                   <h5 className="card-title">Rating: {review.rating}</h5>
//                   <p className="card-text">Customer: {review.customerName}</p>
//                   <p className="card-text">{review.comment}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="mt-4">
//               <h5>No Reviews Available</h5>
//             </div>
//           )}
//           <div className="mt-3">
//             <TextField
//               label="Comment"
//               variant="outlined"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               fullWidth
//               multiline
//               rows={4}
//             />
//           </div>
//           <div className="mt-3">
//             <TextField
//               label="Rating"
//               variant="outlined"
//               type="number"
//               value={rating}
//               onChange={(e) => setRating(Number(e.target.value))}
//               fullWidth
//             />
//           </div>
//           <div className="mt-3">
//             <Button variant="contained" color="primary" onClick={handleAddReview}>
//               Submit Review
//             </Button>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <h4>Location</h4>
//           <div className="card">
//             <div className="card-body">
//               <GoogleMap location={product.location} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Weather coords={product.location} />
//       <hr />
//       <div className="mt-4">
//         <h4>Similar Products</h4>
//         <div className="row">
//           {Travdata.map((similarProduct) => (
//             <div className="col-md-4" key={similarProduct.id}>
//               <a onClick={() => navigate('/tourpackage', { state: { product: similarProduct } })}>
//                 <img
//                   src={similarProduct.image}
//                   alt={similarProduct.title}
//                   className="img-fluid rounded"
//                 />
//               </a>
//               <h3>${similarProduct.price}</h3>
//               <p className="mt-2">{similarProduct.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourPackagePage;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, TextField } from '@mui/material';
import Travdata from './Travdata';
import GoogleMap from './GoogleMap';
import Weather from './Weather';

const TourPackagePage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(product, items));
  };

  const [review, setReview] = useState({ rating: 0, comment: '', customerName: '' });
  const [reviews, setReviews] = useState(product.reviews || []);

  if (!product) {
    // Handle the case when the data is missing or null
    navigate('/error-page');
    return null;
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const productId = product._id;
    try {
      // Make the POST request to the backend API
      const response = await fetch(`http://localhost:7070/travdata/${productId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
  
      if (response.ok) {
        console.log('Review submitted successfully');
        // Reset the form
        setReview({ rating: 0, comment: '', customerName: '' });
        // Refresh the reviews from the backend
        const updatedReviews = await response.json();
        setReviews(updatedReviews);
      } else {
        throw new Error('Error submitting review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle the error as needed
    }
  };

  const getRandomItems = (array, count) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  };
  let similarProducts = Travdata.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id &&
      Math.abs(item.price - product.price) <= 1000 // Adjust the price range as needed
  );
  if (similarProducts.length === 0) {
    similarProducts = Travdata.filter(
      (item) => item.category === product.category && item.id !== product.id
    );
  }
  const randomSimilarProducts = getRandomItems(similarProducts, 3);
  return (
    <div className="container py-4">
      <h2 className="mb-4">Product Details</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt="Product" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Price: ${product.price}</h3>
          <h3 className="mb-3">Description:</h3>
          <p>{product.description}</p>
          <div className="mt-4">
            <h5>Specifications:</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Package Name:</strong> {product.title}
              </li>
              <li>
                <strong>Category:</strong> {product.category}
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <Button
              className="btn btn-primary me-3"
              variant="contained"
              size="medium"
              onClick={handleClick}
            >
              <AddShoppingCartIcon className="me-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Customer Reviews</h4>
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="card my-3">
                <div className="card-body">
                  <h5 className="card-title">Rating: {review.rating}</h5>
                  <p className="card-text">Customer: {review.customerName}</p>
                  <p className="card-text">{review.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-4">
              <h5>No Reviews Available</h5>
            </div>
          )}
          <div className="mt-3">
            <TextField
              label="Customer Name"
              variant="outlined"
              value={review.customerName}
              onChange={(e) => setReview({ ...review, customerName: e.target.value })}
              fullWidth
            />
          </div>
          <div className="mt-3">
            <TextField
              label="Comment"
              variant="outlined"
              value={review.comment}
              onChange={(e) => setReview({ ...review, comment: e.target.value })}
              fullWidth
              multiline
              rows={4}
            />
          </div>
          <div className="mt-3">
            <TextField
              label="Rating"
              variant="outlined"
              type="number"
              value={review.rating}
              onChange={(e) => setReview({ ...review, rating: Number(e.target.value) })}
              fullWidth
            />
          </div>
          <div className="mt-3">
            <Button variant="contained" color="primary" onClick={handleReviewSubmit}>
              Submit Review
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Location</h4>
          <div className="card">
            <div className="card-body">
              <GoogleMap location={product.location} />
            </div>
          </div>
        </div>
      </div>
      <Weather coords={product.location} />
      <hr />
      <div className="mt-4">
        <h4>Similar Products</h4>
        <div className="row">
          {randomSimilarProducts.map((similarProduct) => (
            <div className="col-md-4" key={similarProduct.id}>
              <a
                onClick={() =>
                  navigate('/tourpackage', { state: { product: similarProduct } })
                }
              >
                <img
                  src={similarProduct.image}
                  alt={similarProduct.title}
                  className="img-fluid rounded"
                />
              </a>
              <h3>${similarProduct.price}</h3>
              <p className="mt-2">{similarProduct.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackagePage;
