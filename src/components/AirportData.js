const geo = require("mt-geo");

const AirportData = ({ airport }) => {
  return (
    <>
      <span>{airport.name}</span>
      <span>{airport.icao}</span>
      <span>{airport.iata}</span>
      <span>{airport.elevation}</span>
      <span>{geo.toLat(airport.latitude)}</span>
      <span>{geo.toLon(airport.longitude)}</span>
      <span>{airport.type}</span>
    </>
  );
};

export default AirportData;
