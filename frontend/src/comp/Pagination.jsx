import React from "react";

const Pagination = ({ currentPage, perPage, totalUsers, paginate }) => {
  const pageNumber = [];
  console.log(currentPage, perPage, totalUsers);
  console.log(Math.ceil(totalUsers / perPage));
  for (let i = 1; i <= Math.ceil(totalUsers / perPage); i++) {
    pageNumber.push(i);
    console.log(pageNumber);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
