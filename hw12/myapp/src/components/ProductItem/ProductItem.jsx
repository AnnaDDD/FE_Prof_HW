import styles from './ProductItem.module.css';

const ProductItem = ({ product, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className={styles.product_item}>
      <div className={styles.product_name}>{product.name}</div>
      <div className={styles.product_price}>Price: {product.price}</div>
      <div className={styles.product_controls}>
        <button onClick={() => onIncrement(product)}>+</button>
        <span className={styles.product_count}>{product.count}</span>
        <button onClick={() => onDecrement(product)}>-</button>
      </div>
      <button className={styles.product_delete} onDoubleClick={() => onDelete(product.id)}>
        Double click to delete
      </button>
    </div>
  );
};

export default ProductItem;
