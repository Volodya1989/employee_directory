import React, { Component } from "react";
import API from "../utils/API";
import TableRaw from "./TableRaw";

export default class Table extends Component {
  state = {
    employees: [],
    sortedArray: [],
    sortType: "asc",
  };

  handleSearch = (event) => {
    const search = event.target.value;
    // console.log(search);
  };
  handleSortName = () => {
    const sortedAr = this.state.sortedArray;
    if (this.state.sortType === "asc") {
      const sorted = sortedAr.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log("sorted array: " + JSON.stringify(sorted));
      this.setState({
        sortedArray: sorted,
        sortType: "desc",
      });
    } else  {
      const sorted = sortedAr.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log("sorted array: " + sorted);
      this.setState({
        sortedArray: sorted,
        sortType: "asc",
      });
    }
  };

  componentDidMount() {
    API.getUsers()
      .then((results) => {
        // console.log("Results: " + JSON.stringify(results.data.results));
        this.setState({
          employees: results.data.results,
          sortedArray: results.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <table className="employeeTable ">
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={this.handleSortName}>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Age</th>
          </tr>
        </thead>
        <TableRaw results={this.state.employees} />
      </table>
    );
  }
}

//export default Table;
