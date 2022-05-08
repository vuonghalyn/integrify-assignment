import { Link } from "react-router-dom";
import styles from "./itemBox.module.css";
//get prop item and index from parent component
const ItemBox = ({ item, index }) => {
  return (
    <div className={styles.container}>
      <div>
        {/* display name, brewery_type and city from object item  */}
        <p>{item.name}</p>
        <p>{item.brewery_type}</p>
        <p>{item.city}</p>
      </div>
      {/* using link component from ReAct router to navigate to detail page  */}
      {/* provide item.id as parameter  */}
      <Link key={index} className={styles.button} to={`/detail/${item.id}`}>
        View Detail
      </Link>
    </div>
  );
};

export default ItemBox;
