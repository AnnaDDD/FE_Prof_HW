import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementItemCount, decrementItemCount} from './actions';
import './index.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <p>{item.title}</p>
      <div>
        <button className="decrement-button" onClick={() => dispatch(decrementItemCount(item.id))}>-</button>
        <span>{item.count}</span>
        <button className="increment-button" onClick={() => dispatch(incrementItemCount(item.id))}>+</button>
      </div>
    </div>
  );
};

export default CartItem;


