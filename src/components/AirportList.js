// import { useState } from "react";
import AirportData from "./AirportData";

const Airport = ({ airports, loading }) => {
  console.log(airports);
  if (loading) {
    return (
      <tbody>
        <tr>
          <td>
            <h2>Loading...</h2>
          </td>
        </tr>
      </tbody>
    );
  } else {
    return (
      <tbody>
        {airports.map((airport, i) => (
          <AirportData key={i} airport={airport} />
        ))}
      </tbody>
    );
  }
  // } else {
  //   airports
  //     .filter((el) => {
  //       console.log(
  //         Object.values(el).join(" ").toLowerCase()
  //         // .includes(searchItem.toLowerCase())
  //       );
  //       return Object.values(el)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(searchItem.toLowerCase());
  //     })
  //     .map((airport, i) => (
  //       <tr key={i}>
  //         <td>{airport.name}</td>
  //         <td>{airport.icao}</td>
  //         <td>{airport.iata}</td>
  //         <td>{airport.elevation}</td>
  //         <td>{airport.latitude}</td>
  //         <td>{airport.longitude}</td>
  //         <td>{airport.type}</td>
  //       </tr>
  //     ));
  // }
};

export default Airport;