import React, { useState, useEffect } from 'react';
import './index.css'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    let url = "https://dummyjson.com/products";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let productsData = data.products;
        setProducts(productsData);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div className="app">
      <Header/>
      <ProductList products={products} handleDelete={handleDelete}/>
      <Footer/>
    </div>
  );
};

export default App;





