import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/detailCard/DetailCard";

const DetailPage = () => {
  let { id } = useParams();
  const [detailData, setDetailData] = useState([]);
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${id}`).then((response) => {
      response.json().then((parsedData) => {
        setDetailData(parsedData);
      });
    });
  }, [id]);
  return (
    <div className="content-wrapper">
      <DetailCard detailData={detailData} />
    </div>
  );
};

export default DetailPage;
