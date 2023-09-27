export const incrementItemCount = (itemId) => ({
    type: 'INCREMENT_ITEM_COUNT',
    itemId,
  });
  
  export const decrementItemCount = (itemId) => ({
    type: 'DECREMENT_ITEM_COUNT',
    itemId,
  });
  
  export const addItemToCart = (itemName) => ({
    type: 'ADD_ITEM_TO_CART',
    item: {
      id: Date.now(),
      title: itemName,
      count: 1,
    },
  });
  
  export const removeItemFromCart = (itemId) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    itemId,
  });
  