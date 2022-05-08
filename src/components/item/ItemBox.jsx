import { Link } from "react-router-dom";
import styles from "./itemBox.module.css";
const ItemBox = ({ item, index }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>{item.name}</p>
        <p>{item.brewery_type}</p>
        <p>{item.city}</p>
      </div>
      <Link key={index} className={styles.button} to={`/detail/${item.id}`}>
        View Detail
      </Link>
    </div>
  );
};

export default ItemBox;
