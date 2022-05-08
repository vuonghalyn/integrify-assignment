import React, { useState, useEffect } from "react";
import ItemBox from "../components/item/ItemBox";
import SearchBar from "../components/searchBar/SearchBar";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries").then((response) => {
      response.json().then((parsedData) => {
        console.log(parsedData);
        setData(parsedData);
      });
    });
  }, []);
  return (
    <div className="content-wrapper">
      <SearchBar data={data} setData={setData} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "20px",
        }}
      >
        {data.map((item, index) => {
          return <ItemBox item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
