import { useState, useEffect } from "react";
import AirportList from "./AirportList";
import Pagination from "./Pagination";
// import { Airports } from "../data/Airports";

function Table({ searchTerm, setAllData, filteredData, setFilteredData }) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [airportsPerPage, setAirportsPerPage] = useState(4);
  // const [filteredData, setFilteredData] = useState([]);

  // const [query, setQuery] = useState();

  const fetchAirports = async () => {
    try {
      setLoading(true);
      const resp = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await resp.json();
      // setAirports(data);
      setAllData(data);
      setFilteredData(data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  const indexOfLastAirport = currentPage * airportsPerPage;
  const indexOfFirstAirport = indexOfLastAirport - airportsPerPage;
  const currentAirports = filteredData.slice(
    indexOfFirstAirport,
    indexOfLastAirport
  );

  // const airportSearch = airports.filter((val) => {
  //   if (searchTerm === "") {
  //     return val;
  //   } else {
  //     const newAirports = Object.values(val)
  //       .join(" ")
  //       .toLocaleLowerCase()
  //       .includes(searchTerm.toLocaleLowerCase());

  //     console.log(newAirports);
  //     return newAirports;
  //   }
  // });

  // Search Functionality:
  // const searchItem = (searchTerm) => {
  //   setQuery(searchTerm);
  //   if (searchTerm !== "") {
  //     const newAirports = currentAirports.filter((airport) => {
  //       console.log(
  //         Object.values(currentAirports)
  //           .join(" ")
  //           .toLowerCase()
  //           .includes(searchTerm.toLowerCase())
  //       );

  //       return Object.values(currentAirports)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(currentAirports.toLowerCase());
  //     });
  //     setQuery(newAirports);
  //   } else {
  //     setQuery(currentAirports);
  //   }
  // };

  // if (searchTerm === "") {
  //   setQuery(currentAirports);
  // } else {
  //   setQuery(
  //     Object.values(currentAirports)
  //       .join(" ")
  //       .toLowerCase()
  //       .includes(currentAirports.toLowerCase())
  //   );
  // }

  // console.log(searchItem());

  // Change Page
  const paginate = (number, flag) => {
    if (number <= 0) {
      setCurrentPage(1);
    }

    if (number >= 1) {
      if (flag === 0) {
        setCurrentPage(currentPage - 1);
      } else setCurrentPage(currentPage + 1);
    }
  };
  // console.log(airports);
  return (
    <section>
      <article>
        <input
          type="number"
          id="count"
          value={airportsPerPage}
          onChange={(e) => setAirportsPerPage(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ICO</th>
              <th>IATA</th>
              <th>Elev.</th>
              <th>Lat.</th>
              <th>Long.</th>
              <th>Type</th>
            </tr>
          </thead>

          <AirportList airports={currentAirports} loading={loading} />
        </table>
      </article>
      <Pagination
        totalAirports={filteredData.length}
        startIndex={indexOfFirstAirport}
        endindex={indexOfLastAirport}
        paginate={paginate}
        currentPage={currentPage}
        airportsPerPage={airportsPerPage}
      />
    </section>
  );
}

export default Table;
