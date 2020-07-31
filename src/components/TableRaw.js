import React from "react";
import Moment from "react-moment";

const TableRaw = (props) => {
  console.log(props.results[0]);

  return (
    <tbody className="">
      {props.results.map((result) => (
        <tr className="table" key={result.login.uuid}>
          <td>
            <img className="" src={result.picture.medium} alt="" />
          </td>

          <td>
            {result.name.first} {result.name.last}
          </td>

      <td>{result.phone}</td>
          <td className="email">
            <a href="mailto:{result.email}">{result.email}</a>
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

export default TableRaw;
