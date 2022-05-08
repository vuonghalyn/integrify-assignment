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
          {detailData.brewery_type ? detailData.brewery_type : "N/A"}
        </p>
        <p>
          <b>Street: </b>
          {detailData.street ? detailData.street : "N/A"}
        </p>
        <p>
          <b>Address 2: </b>
          {detailData.address_2 ? detailData.address_2 : "N/A"}
        </p>
        <p>
          <b>Address 3: </b>
          {detailData.address_3 ? detailData.address_3 : "N/A"}
        </p>
        <p>
          <b>City: </b>
          {detailData.city ? detailData.city : "N/A"}
        </p>
        <p>
          <b>State: </b>
          {detailData.state ? detailData.state : "N/A"}
        </p>
        <p>
          <b>County Province: </b>
          {detailData.county_province ? detailData.county_province : "N/A"}
        </p>
        <p>
          <b>Postal code: </b>
          {detailData.postal_code ? detailData.postal_code : "N/A"}
        </p>
        <p>
          <b>Country: </b>
          {detailData.country ? detailData.country : "N/A"}
        </p>
        <p>
          <b>Longtitude: </b>
          {detailData.longitude ? detailData.longitude : "N/A"}
        </p>
        <p>
          <b>Latitude: </b>
          {detailData.latitude ? detailData.latitude : "N/A"}
        </p>
        <p>
          <b>Phone: </b>
          <a className={styles.link} href={`tel:${detailData.phone}`}>
            {detailData.phone ? detailData.phone : "N/A"}
          </a>
        </p>
        <p>
          <b>Website: </b>
          <a className={styles.link} href={detailData.website_url}>
            {detailData.website_url ? detailData.website_url : "N/A"}
          </a>
        </p>
        <p>
          <b>Data updated at: </b>
          {new Date(detailData.updated_at).toLocaleString("en-us")}
        </p>
        <p>
          <b>Data created at: </b>
          {new Date(detailData.created_at).toLocaleString("en-us")}
        </p>
      </div>
      {/* Create go back button to link back to Homepage */}
      <Link className={styles.button} to={`/`}>
        Back to Homepage
      </Link>
    </div>
  );
};

export default DetailCard;
