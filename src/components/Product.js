import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    // console.log(items);
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(addToCart(product, items));
    };
    return (
        <div className='col-md-4 prod'>
            <div class="card">
                <img src={product.image} alt='...' />
                <div class="card-body">
                    <h2 class="card-title">{product.title}</h2>
                    <p>{product.description}</p>
                    <p className='fw-bolder'>Price: ${product.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <Button class="btn btn-primary me-2" onClick={handleClick}>
                            <AddShoppingCartIcon />
                        </Button>
                        <Button
                            className="btn btn-dark buy"
                            variant="contained"
                            size="large"
                            onClick={() =>
                                navigate('/tourpackage', {
                                    state: {
                                        product,
                                        // title: product.title,
                                        // image: product.image,
                                        // category: product.category,
                                        // price: product.price,
                                        // description: product.description
                                    }
                                })
                            }
                        >
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;