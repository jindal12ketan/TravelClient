import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, addToCart, decrementQuantity } from "../actions/cartActions";
import { Container, Row, Col, Button } from "react-bootstrap";

const Cart = () => {
  const cartItems = useSelector(({ cart }) => cart.items);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
      return;
    }

    const { count } = cartItems[itemIndex];

    if (count === 0) {
      cartItems.splice(itemIndex, 1);
    }

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
      <Row key={`${index}-${id}`} className="border-bottom py-2">
        <Col md={2}>
          <img src={image} alt={title} width="100" />
        </Col>
        <Col md={4}>
          <h5>{title}</h5>
          <p className="text-muted">${price}</p>
        </Col>
        <Col md={2} className="align-self-center">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={handleDecrement}
            disabled={count === 0}
          >
            -
          </Button>{" "}
          {count}{" "}
          <Button variant="outline-secondary" size="sm" onClick={handleIncrement}>
            +
          </Button>
        </Col>
        <Col md={2} className="align-self-center">
          <p>${totalPrice}</p>
        </Col>
        <Col md={2} className="align-self-center">
          <Button variant="danger" size="sm" onClick={() => handleRemove(id)}>
            Remove
          </Button>
        </Col>
      </Row>
    );
  };

  const renderedCartItems = cartItems.filter((item) => item.count > 0).map(renderCartItem);

  const total = calculateTotal(cartItems);

  return (
    <Container>
      <h1 className="my-4">Shopping Cart</h1>

      {renderedCartItems}

      <Row className="py-3">
        <Col md={{ span: 4, offset: 4 }} className="text-center">
          <p className="lead">
            Total: <strong>${total}</strong>
          </p>
          <Button variant="warning" size="sm" onClick={handleClear}>
            Clear Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
