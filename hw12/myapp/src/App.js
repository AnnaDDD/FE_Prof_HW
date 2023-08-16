import React, { useState } from 'react';
import ProductItem from './components/ProductItem/ProductItem';
import './styles.css';
import { productsData } from './data';
import ProductList from './components/ProductList/ProductList';

const App = () => {

  const [data, setData] = useState(productsData);

  const handleIncrement = (product) => {
    const updatedData = data.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
    setData(updatedData);
  };

  const handleDecrement = (product) => {
    const updatedData = data.map((item) =>
      item.id === product.id
        ? item.count > 1
          ? { ...item, count: item.count - 1 }
          : null
        : item
    ).filter(Boolean); 
    setData(updatedData);
    
    if (product.count === 1) {
      handleDelete(product.id);
    }
  };


  const handleDelete = (productId) => {
    const updatedData = data.filter((item) => item.id !== productId);
    setData(updatedData);
  };

  const handleAddProduct = () => {
    const name = prompt('Enter product name:');
    const price = parseFloat(prompt('Enter product price:'));
    const count = parseInt(prompt('Enter product count:'));

    if (name && price && count) {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        count,
      };
      setData([...data, newProduct]);
    }
  };

  return (
    <div className="app">
      <button className="add-button" onClick={handleAddProduct}>Add Product</button>
      <ProductList data={data} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete}/>
    </div>
  );
};

export default App;
