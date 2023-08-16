import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css"


const ProductList = ({data, onIncrement, onDecrement, onDelete}) => {
  return (
    <ul className={styles.product_list}>
    {data.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    ))}
  </ul>
  );
};

export default ProductList;