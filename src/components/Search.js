import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

export default class Search extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
  };
  componentDidMount() {
    API.getUsers()
      .then((results) => {
        this.setState({
          employees: results.data.results,
          filteredEmployees: results.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputChange = (event) => {
    const search = event.target.value;
    console.log(search);
    const filteredEmployees = this.state.employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    this.setState({
      filteredEmployees,
      search: search,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.search) {
      alert("Field cannot be empty for valid search");
    }
    const filteredEmployees = this.state.employees.filter((employee) =>
      employee.name.first
        .toLowerCase()
        .includes(this.state.search.toLowerCase())
    );
    this.setState({ filteredEmployees });
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <form>
          <input
            type="text"
            className="search"
            placeholder="search by name"
            onChange={(e) => this.handleInputChange(e)}
          />
          <button
            type="submit"
            onClick={(e) => this.handleSubmit(e)}
            className="btn btn-success"
          >
            Search
          </button>
        </form>
        <Table />
      </Wrapper>
    );
  }
}
