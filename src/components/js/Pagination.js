import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import "../css/Pagination.css";

const pagination = ({ totalPages, currentPage, changePage }) => {
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage + 1} onClick={() => changePage(number - 1)}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="pagination-wrap">
      <Pagination>
        <Pagination.First onClick={() => changePage(0)}/>
        <Pagination.Prev onClick={() => changePage(currentPage === 0 ? currentPage : currentPage-1)}/>
        {items}
        <Pagination.Next onClick={() => changePage(currentPage === totalPages-1 ? currentPage : currentPage + 1)}/>
        <Pagination.Last onClick={() => changePage(totalPages-1)}/>
      </Pagination>
    </div>
  );
}

export default pagination;