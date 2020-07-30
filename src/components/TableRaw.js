import React from "react";
import Moment from "react-moment";
import API from "../utils/API";

const TableRaw = () => {
  return (
    <tbody className="">
      {/* {results.map((result) => ( */}
      <tr className="table" key="">
        <td>
          Image
          <img className="" src="" alt="" />
        </td>

        <td> Name </td>

        <td>Cell</td>
        <td className="email">
          <a href="/">Email</a>
        </td>
        <td>
          <Moment format="MM/DD/YYYY">Date</Moment>
        </td>
      </tr>
      {/* ))} */}
    </tbody>
  );
};

export default TableRaw;
