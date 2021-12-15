const AirportData = ({ airport }) => {
  return (
    <tr>
      <td>{airport.name}</td>
      <td>{airport.icao}</td>
      <td>{airport.iata}</td>
      <td>{airport.elevation}</td>
      <td>{airport.latitude}</td>
      <td>{airport.longitude}</td>
      <td>{airport.type}</td>
    </tr>
  );
};

export default AirportData;
