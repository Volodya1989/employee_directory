import React, { Component } from "react";
import API from "../utils/API";
import TableRaw from "./TableRaw";

export default class Table extends Component {
  state = {
    employees: [],
    sortedName: [],
    sortedDOB: [],
    sortType: "asc",
  };

  handleSortName = () => {
    const sortAr = this.state.sortedName;
    if (this.state.sortType === "asc") {
      const sorted = sortAr.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      this.setState({
        sortedName: sorted,
        sortType: "desc",
      });
    } else {
      const sorted = sortAr.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      this.setState({
        sortedName: sorted,
        sortType: "asc",
      });
    }
  };
  handleSortDOB = () => {
    const sortAr = this.state.employees;
    if (this.state.sortType === "asc") {
      const sortDate = sortAr
        .sort(
          (a, b) =>
            new Date(a.dob.date).getTime() - new Date(b.dob.date).getTime()
        ).reverse();
      this.setState({
        sortedDOB: sortDate,
        sortType: "desc",
      });
    } else {
      const sortDate = sortAr.sort((a, b) =>
        new Date(a.dob.date) - new Date(b.dob.date) ? -1 : 1
      );
      this.setState({
        sortedDOB: sortDate,
        sortType: "asc",
      });
    }
  };

  componentDidMount() {
    API.getUsers()
      .then((results) => {
        this.setState({
          employees: results.data.results,
          sortedName: results.data.results,
          sortedDOB: results.data.results,
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
            <th onClick={this.handleSortDOB}>DOB</th>
            <th>Age</th>
          </tr>
        </thead>
        <TableRaw results={this.state.employees} />
      </table>
    );
  }
}

