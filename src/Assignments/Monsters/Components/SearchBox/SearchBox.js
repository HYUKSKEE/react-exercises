import "./SearchBox.scss";

function SearchBox({ handleChange }) {
  /* console.log(handleChange); */
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
}

export default SearchBox;
