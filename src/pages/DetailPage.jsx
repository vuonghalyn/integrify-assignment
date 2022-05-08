import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/detailCard/DetailCard";

const DetailPage = () => {
  // get id parameter from ReAct router
  let { id } = useParams();
  // initial state with empty object
  const [detailData, setDetailData] = useState({});
  // useEffect runs on componentDidmount and also when id changes because id an dependecy
  useEffect(() => {
    // fetch detail brewery data based on id
    fetch(`https://api.openbrewerydb.org/breweries/${id}`).then((response) => {
      // convert stream data to json
      response.json().then((parsedData) => {
        // set State
        setDetailData(parsedData);
      });
    });
  }, [id]);
  return (
    <div className="content-wrapper detail-page">
      {/* render detail card based on detail data  */}
      <DetailCard detailData={detailData} />
    </div>
  );
};

export default DetailPage;
