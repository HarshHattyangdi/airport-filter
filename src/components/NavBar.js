import { useState } from "react";
import { AirportTypes } from "../utils/AirportType";

function NavBar({ allData, setFilteredData }) {
  const [filterString, setFilterString] = useState("");
  const [isChecked, setIsChecked] = useState(
    new Array(AirportTypes.length).fill(false)
  );

  const handleChange = (position, e) => {
    let value = e.target.value.toLowerCase();
    let result = allData.filter((data) => {
      return data.type.toString().includes(value);
    });
    setFilteredData(result);

    const updatedCheckedState = isChecked.map((item, index) => {
      return index === position ? !item : item;
    });
    setIsChecked(updatedCheckedState);
    setFilterString(filterString);
  };
  console.log(filterString);
  // console.log(filterString);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = allData.filter((data) => {
      return Object.values(data).join("").toLowerCase().includes(value);
    });
    setFilteredData(result);
  };
  // console.log(allData);
  return (
    <nav className="box2">
      <div className="flex-type">
        <h3>Type</h3>
        <ul>
          {AirportTypes.map((val, i) => {
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={isChecked[i]}
                  onChange={(e) => {
                    handleChange(i, e);
                  }}
                  value={val}
                />{" "}
                {val}
                <span className="checkmark"></span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-search">
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
