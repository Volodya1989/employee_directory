import React from "react";
import Moment from "react-moment";

const TableRaw = (props) => {
  return (
    <tbody className="">
      {/* {props.results.map((result) => ( */}
        <tr className="table" key="">
          <td>
            Image
            <img className="" src="" alt="" />
          </td>

          <td> Name </td>

          <td>Pnone</td>
          <td className="email">
            <a href="/">Email</a>
          </td>
          {/* <td>
            <Moment format="MM/DD/YYYY">Date</Moment>
          </td> */}
          <td>Age</td>
        </tr>
      {/* ))} */}
      
    </tbody>
  );
};

export default TableRaw;
