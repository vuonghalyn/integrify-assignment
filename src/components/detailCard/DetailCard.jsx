import { Link } from "react-router-dom";
import styles from "./DetailCard.module.css";
// get detail data from props
const DetailCard = ({ detailData }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>{detailData.name}</p>
        <p>{detailData.brewery_type}</p>
        <p>{detailData.street}</p>
        <p>{detailData.address_2}</p>
        <p>{detailData.address_3}</p>
        <p>{detailData.city}</p>
        <p>{detailData.state}</p>
        <p>{detailData.county_province}</p>
        <p>{detailData.postal_code}</p>
        <p>{detailData.country}</p>
        <p>{detailData.longitude}</p>
        <p>{detailData.latitude}</p>
        <a href={`tel:${detailData.phone}`}>{detailData.phone}</a>
        <br />
        <a href={detailData.website_url}>{detailData.website_url}</a>
        <p>{detailData.updated_at}</p>
        <p>{detailData.created_at}</p>
      </div>
      {/* Create go back button to link back to Homepage */}
      <Link className={styles.button} to={`/`}>
        Back to Homepage
      </Link>
    </div>
  );
};

export default DetailCard;
