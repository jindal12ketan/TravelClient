// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../actions/cartActions';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Button } from '@mui/material';
// import Travdata from './Travdata';
// import GoogleMap from './GoogleMap';

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
//           {/* Add more elements for other details */}
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
//             <Button className="btn btn-primary me-3" variant="contained" size="medium" onClick={handleClick}>Add to Cart</Button>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <GoogleMap location={product.location} />
//       <hr />
//       <div className="mt-4">
//         <h4>Similar Products</h4>
//         <div className="row">
//           {randomSimilarProducts.map((similarProduct) => (
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


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import Travdata from './Travdata';
import GoogleMap from './GoogleMap';

const TourPackagePage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(product, items));
  };
  if (!product) {
    // Handle the case when the data is missing or null
    navigate('/error-page');
    return null;
  }

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
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
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
