import Stars from '../Stars/Stars'; 
import styles from "./ProductCard.module.css"

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className={styles.product_item} onDoubleClick={() => onDelete(product.id)}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <Stars rating={product.rating} />
    </div>
  );
};

export default ProductCard;


