import React, { Component } from "react";
import API from "../utils/API";
import TableRaw from "./TableRaw";

export default class Table extends Component {
  state = {
    employees: []
  };

  handleSearch = (event) => {
    const search = event.target.value;
    console.log(search);
  };

  componentDidMount() {
    API.getUsers()
      .then((results) => {
        console.log("Results: " + JSON.stringify(results.data.results));
        this.setState({
          employees: results.data.results
        });

        //console.log("EMp Name: "+this.state.employees.name.first);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render(){
      return (
        <table className="employeeTable ">
        <thead>
          <tr>
            <th>Image</th>
            <th onClick="">Name</th>
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
