import Button from "@mui/material/Button";
import styles from "./SearchBar.module.css";
// get set State from parents (HomePage)
const SearchBar = ({ setData }) => {
  // our logic to handle user search
  const handleSearch = async (event) => {
    // using prevent default to prevent native HTML to refresh page
    event.preventDefault();
    // get keyword input from form and normalize keyword to lower case
    const keyword = event.target.keyword.value.toLowerCase();
    // declair variable to store all breweries data
    let originalData = [];
    // fetch brewery data, must use await to wait for promise to resolve
    originalData = await fetch("https://api.openbrewerydb.org/breweries");
    // convert stream data to json and use await to wait for promise to resolve
    const parsedData = await originalData.json();
    // declare variable to store search result
    const matchingItems = [];
    // loop through each brewery data to check if our keyword exists
    parsedData.forEach((item) => {
      if (
        // search keyword in name, brewery_type and city
        // using toLowerCase to normalize api data
        item.name.toLowerCase().includes(keyword) ||
        item.brewery_type.toLowerCase().includes(keyword) ||
        item.city.toLowerCase().includes(keyword)
      ) {
        // if keyword found then push that item into search result array
        matchingItems.push(item);
      }
    });
    // after loop set search result to state
    setData(matchingItems);
  };
  return (
    // render HTML form, onSubmit props runs handleSearch function
    <form onSubmit={handleSearch}>
      {/* input with name=keyword for data accessing */}
      <input type="text" name="keyword"></input>
      {/* button with type=submit to submit form data */}
      <Button type="submit" className={styles.button} variant="outlined">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
