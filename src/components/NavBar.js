function NavBar({ setSearchTerm, allData, setFilteredData }) {
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = allData.filter((data) => {
      return Object.values(data).join("").toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };
  console.log(allData);
  return (
    <nav>
      <div>
        <h3>Type</h3>
        <ul>
          <li>
            <input type="checkbox" name="small" id="small" />
            Small
          </li>
          <li>
            <input type="checkbox" name="medium" id="medium" />
            Medium
          </li>
          <li>
            <input type="checkbox" name="large" id="large" />
            Large
          </li>
          <li>
            <input type="checkbox" name="heliport" id="heliport" />
            Heliport
          </li>
          <li>
            <input type="checkbox" name="closed" id="closed" />
            Closed
          </li>
          <li>
            <input type="checkbox" name="favourites" id="favourites" />
            in your favourites
          </li>
        </ul>
      </div>
      <div>
        <h3>Filter by search</h3>
        <div>
          <input
            type="text"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
