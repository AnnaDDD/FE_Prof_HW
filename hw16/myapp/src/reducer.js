const initialState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 },
];
  

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_ITEM_COUNT':
        return state.map((item) =>
          item.id === action.itemId
            ? { ...item, count: Math.min(25, item.count + 1) }
            : item
        );
  
      case 'DECREMENT_ITEM_COUNT':
        const updatedState = state.map((item) =>
          item.id === action.itemId
            ? { ...item, count: Math.max(0, item.count - 1) }
            : item
        );
        return updatedState.filter((item) => item.count > 0);
  
      case 'ADD_ITEM_TO_CART':
        return [...state, action.item];
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  
  
  
  