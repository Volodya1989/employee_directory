import React from "react";
import TableBody from "../TableBody/TableBody";
import "./table.styles.css";

const Table = ({ employees, onSortByName, onSortByDOB }) => {
  return (
    <div className="container ">
      <div className="employeeTable form-inline justify-content-center">
        <table>
          <thead>
            <tr className="tableHeader">
              <th>Image</th>
              {/* here we pass method that is responsible for sorting list of employees by name */}
              <th onClick={onSortByName}>
                <btn className="clickMe">Name</btn>
              </th>
              <th>Phone</th>
              <th>Email</th>
              {/* here we pass method that is responsible for sorting list of employees by date of birth */}
              <th onClick={onSortByDOB}>
                <btn className="clickMe">DOB</btn>
              </th>
              <th>Age</th>
            </tr>
          </thead>
          {/* here we are passing data that is received form API call to fill the table body */}
          <TableBody results={employees} />
        </table>
      </div>
    </div>
  );
};
export default Table;
