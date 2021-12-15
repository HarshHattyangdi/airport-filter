import AirportData from "./AirportData";

const Airport = ({ airports, loading }) => {
  console.log(airports);
  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  } else {
    return (
      <>
        {airports.map((airport, i) => (
          <AirportData key={i} airport={airport} />
        ))}
      </>
    );
  }
};

export default Airport;
