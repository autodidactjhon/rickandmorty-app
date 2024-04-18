const Pagination = ({ currentPage, onPageChange, hasNextPage }) => {
  return (
    <div>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
