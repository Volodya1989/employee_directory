import React from "react";
import TableBody from "../TableBody/TableBody";
import './table.styles.css';

export default function Table ({ employees, onSortByName, onSortByDOB }) {
  return (
    <table className="employeeTable ">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={onSortByName}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th onClick={onSortByDOB}>DOB</th>
          <th>Age</th>
        </tr>
      </thead>

      <TableBody results={employees} />
    </table>
  );
}
