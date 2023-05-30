export const addToCart = ({ id, ...product }, items) => {
  const existingItemIndex = items.findIndex((item) => item.id === id);
  const updatedItems = existingItemIndex === -1
    ? [...items, { id, ...product, count: 1 }]
    : items.map((item) => item.id === id ? { ...item, count: item.count + 1 } : item);

  return { type: 'ADD_TO_CART', payload: updatedItems };
};

export const removeFromCart = (id, items) => {
  const updatedItems = items.map((item) => item.id === id ? { ...item, count:0 } : item);

  return { type: 'REMOVE_FROM_CART', payload: updatedItems };
};

export const decrementQuantity = (id, items) => {
  const updatedItems = items.map((item) => item.id === id ? { ...item, count: item.count - 1 } : item);
  return { type: 'DECREMENT_QUANTITY', payload: updatedItems };
};

export const clearCart = () => {
  return { type: 'CLEAR_CART' };
};