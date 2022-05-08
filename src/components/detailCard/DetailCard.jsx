import styles from "./DetailCard.module.css";
const DetailCard = ({ detailData }) => {
  return (
    <div className={styles.container}>
      <p>{detailData.name}</p>
      <p>{detailData.brewery_type}</p>
      <p>{detailData.street}</p>
      <p>{detailData.address_2}</p>
      <p>{detailData.address_3}</p>
      <p>{detailData.state}</p>
      <p>{detailData.county_province}</p>
      <p>{detailData.city}</p>
      <a href={`tel:${detailData.phone}`}>{detailData.phone}</a>
      <br />
      <a href={detailData.website_url}>{detailData.website_url}</a>
      <p>{detailData.name}</p>
    </div>
  );
};

export default DetailCard;
