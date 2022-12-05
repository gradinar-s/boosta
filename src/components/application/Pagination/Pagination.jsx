import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.css";

const Pagination = ({ pageCount, setCurrentPage }) => {
  const handlePageChange = (data) => {
    const selectedPage = data?.selected + 1; // selected is an index
    setCurrentPage(selectedPage);
  };

  return (
    <ReactPaginate
      nextLabel=">"
      breakLabel="..."
      previousLabel="<"
      pageCount={pageCount}
      pageRangeDisplayed={1}
      renderOnZeroPageCount={null}
      className={styles.pagination}
      onPageChange={handlePageChange}
    />
  );
};

export default Pagination;
