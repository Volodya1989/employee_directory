import React from "react";
import API from "../utils/API";
import TableRaw from "./TableRaw";

const Table = (props) => {
  return (
    <table className="employeeTable ">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={props.sortByName}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Age</th>
        </tr>
      </thead>
        <TableRaw  />
    </table>
  );
};

export default Table;
