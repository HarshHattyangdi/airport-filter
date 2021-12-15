const AirportData = ({ airport }) => {
  return (
    <>
      <span>{airport.name}</span>
      <span>{airport.icao}</span>
      <span>{airport.iata}</span>
      <span>{airport.elevation}</span>
      <span>{airport.latitude}</span>
      <span>{airport.longitude}</span>
      <span>{airport.type}</span>
    </>
  );
};

export default AirportData;
