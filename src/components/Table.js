import React from "react";
import API from "../utils/API";
import TableRaw from "./TableRaw";

const Table = () => {
  return (
    <table className="employeeTable ">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick="">Name</th>
          <th>Phone</th>
          <th>E-mail</th>
          <th>DOB</th>
        </tr>
      </thead>
      <TableRaw />
    </table>
  );
};

export default Table;
