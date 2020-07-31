import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

export default class Search extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
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
          employees: results.data.results,
          filteredEmployees: results.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Wrapper>
        <Navbar />
        <form>
          <input
            className="search"
            placeholder="search"
            onChange={(e) => this.handleSearch(e)}
          />
        </form>
        <Table />
      </Wrapper>
    );
  }
}
