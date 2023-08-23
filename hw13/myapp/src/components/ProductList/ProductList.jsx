import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({products, handleDelete}) => {

  return  (
  <div className={styles.product_container}>
        {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
  </div>
    )
};

export default ProductList;