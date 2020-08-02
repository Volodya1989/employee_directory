import React from "react";
import Moment from "react-moment";
import './table-body.styles.css';
//through props we pass data from API call to fill table body with employees information
const TableBody = (props) => {
  return (
    <tbody className="">
      {props.results.map((result) => (
        <tr className="table table-row" key={result.login.uuid}>
          <td>
            <img className="" src={result.picture.medium} alt="" />
          </td>

          <td>
            {result.name.first} {result.name.last}
          </td>

          <td>{result.phone}</td>
          <td className="email">
            <a href="mailto:{result.email}" target="__blank">
              {result.email}
            </a>
          </td>
          <td>
            <Moment format="MM/DD/YYYY">{result.dob.date}</Moment>
          </td>
          <td>{result.dob.age}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
