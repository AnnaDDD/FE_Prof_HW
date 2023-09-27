import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from './actions';
import CartItem from './CartItem';
import './index.css';

const Cart = () => {
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const itemName = prompt('Введите имя товара:');
    if (itemName) {
      dispatch(addItemToCart(itemName));
    }
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <button className="add-item-button" onClick={handleAddItem}>Добавить товар</button>
    </div>
  );
};

export default Cart;

