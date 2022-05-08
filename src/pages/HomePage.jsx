import React, { useState, useEffect } from "react";
import ItemBox from "../components/item/ItemBox";
import SearchBar from "../components/searchBar/SearchBar";

// Functional component HomePage
const HomePage = () => {
  // Set State with initial value empty array
  const [data, setData] = useState([]);
  // UseEffect runs on componentDidmount only once because dependency []
  useEffect(() => {
    // Fetch api all Breweries
    fetch("https://api.openbrewerydb.org/breweries").then((response) => {
      // convert stream data to json
      response.json().then((parsedData) => {
        // set api data to State
        setData(parsedData);
      });
    });
  }, []);
  // render html
  return (
    <div className="content-wrapper">
      {/* render SearchBar pass data and set state as prop to SearchBar */}
      {/* SearchBar use data for searching from keyword, set State is to display the search result  */}
      <SearchBar data={data} setData={setData} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "20px",
        }}
      >
        {/* loop through api result and render each item box */}
        {/* we need index (unique) as key prop to help ReAct differentiate each item box */}
        {data.map((item, index) => {
          return <ItemBox item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
