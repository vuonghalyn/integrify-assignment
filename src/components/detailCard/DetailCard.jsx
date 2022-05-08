import { Link } from "react-router-dom";
import styles from "./DetailCard.module.css";
// get detail data from props
const DetailCard = ({ detailData }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>{detailData.name}</p>
        <p>
          <b>Brewery type: </b>
          {detailData.brewery_type}
        </p>
        <p>Street: {detailData.street}</p>
        <p>{detailData.address_2}</p>
        <p>{detailData.address_3}</p>
        <p>{detailData.city}</p>
        <p>{detailData.state}</p>
        <p>{detailData.county_province}</p>
        <p>{detailData.postal_code}</p>
        <p>{detailData.country}</p>
        <p>{detailData.longitude}</p>
        <p>{detailData.latitude}</p>
        <p>
          <a className={styles.link} href={`tel:${detailData.phone}`}>
            {detailData.phone}
          </a>
        </p>
        <p>
          <a className={styles.link} href={detailData.website_url}>
            {detailData.website_url}
          </a>
        </p>
        <p>{new Date(detailData.updated_at).toLocaleString("en-us")}</p>
        <p>{new Date(detailData.created_at).toLocaleString("en-us")}</p>
      </div>
      {/* Create go back button to link back to Homepage */}
      <Link className={styles.button} to={`/`}>
        Back to Homepage
      </Link>
    </div>
  );
};

export default DetailCard;
