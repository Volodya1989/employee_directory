import React from "react";
import TableBody from "../TableBody/TableBody";
import "./table.styles.css";

export default function Table({ employees, onSortByName, onSortByDOB }) {
  return (
    <div className="container ">
      <div className="employeeTable form-inline justify-content-center">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={onSortByName}><btn className="clickMe">Name</btn></th>
            <th>Phone</th>
            <th>Email</th>
            <th onClick={onSortByDOB}><btn className="clickMe">DOB</btn></th>
            <th>Age</th>
          </tr>
        </thead>

        <TableBody results={employees}  />
      </table>
      </div>
      
    </div>
  );
}
