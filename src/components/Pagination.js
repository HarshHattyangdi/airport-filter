import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  startIndex,
  endindex,
  totalAirports,
  paginate,
  currentPage,
  airportsPerPage,
}) => {
  return (
    <div className="box4">
      <div className="prev">
        <a
          href="!#"
          onClick={() => {
            if (startIndex > 0) paginate(currentPage, 0);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
      </div>

      <div className="curr">
        <span>
          Showing{" "}
          {airportsPerPage === 0 || null || undefined
            ? startIndex
            : startIndex + 1}
          -{endindex <= totalAirports ? endindex : totalAirports} of{" "}
          {totalAirports} results{" "}
        </span>
      </div>

      <div className="next">
        <a
          href="!#"
          onClick={() => {
            if (endindex <= totalAirports) paginate(currentPage, 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default Pagination;
