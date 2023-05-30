const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add the new item to the cart
      return {
        ...state,
        items: action.payload,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: action.payload,
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        items: action.payload,
      };
      
    case 'CLEAR_CART':
      // Clear all items from the cart
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;