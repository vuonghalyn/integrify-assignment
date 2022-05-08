import Button from "@mui/material/Button";
import styles from "./SearchBar.module.css";
const SearchBar = ({ setData }) => {
  const handleSearch = async (event) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    let originalData = [];
    originalData = await fetch("https://api.openbrewerydb.org/breweries");
    const parsedData = await originalData.json();
    const matchingItems = [];
    parsedData.forEach((item) => {
      if (
        item.name.toLowerCase().includes(keyword) ||
        item.brewery_type.toLowerCase().includes(keyword) ||
        item.city.toLowerCase().includes(keyword)
      ) {
        matchingItems.push(item);
      }
    });
    setData(matchingItems);
  };
  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="keyword"></input>
      <Button type="submit" className={styles.button} variant="outlined">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
