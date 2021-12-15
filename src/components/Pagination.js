const Pagination = ({
  startIndex,
  endindex,
  totalAirports,
  paginate,
  currentPage,
  airportsPerPage,
}) => {
  return (
    <div>
      <nav>
        <a
          href="!#"
          onClick={() => {
            if (startIndex > 0) paginate(currentPage, 0);
          }}
        >
          Prev
        </a>
        <span>
          Showing{" "}
          {airportsPerPage === 0 || null || undefined
            ? startIndex
            : startIndex + 1}
          -{endindex <= totalAirports ? endindex : totalAirports} of{" "}
          {totalAirports} results{" "}
        </span>
        <a
          href="!#"
          onClick={() => {
            if (endindex <= totalAirports) paginate(currentPage, 1);
          }}
        >
          Next
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
