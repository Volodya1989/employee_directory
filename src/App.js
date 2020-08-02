//Volodymyr Petrytsya 08/02/20
import React, { Component } from "react";
import API from "./utils/API";
import Search from "./components/Search/Search";
import Table from "./components/Table";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  constructor() {
    super();
    //using bind method to have access to 'this' in other files
    this.handleEmployeeSearch = this.handleEmployeeSearch.bind(this);
    this.handleSortByName = this.handleSortByName.bind(this);
    this.handleSortByDOB = this.handleSortByDOB.bind(this);
    //setting the components initial state
    this.state = {
      search: "",
      employees: [],
      filteredEmployees: [],
      sortType: "asc",
    };
  }
  // When the component mounts, the list of all employees is displayed
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
  //here we narrow list of employees
  handleEmployeeSearch(event) {
    const search = event.target.value;
    //if the search field is empty we are setting state just to initial settings
    if (!search) {
      this.setState({ filteredEmployees: this.state.employees });
      return;
    }
    //filtering list of employees by narrowing it according to user's input in search field
    const filteredEmployees = this.state.employees.filter((employee) => {
      const { first: firstName, last: lastName } = employee.name;
      const name = `${firstName} ${lastName}`;
      return name.toLowerCase().includes(search.toLowerCase().trim());
    });
    //updating the state
    this.setState({
      filteredEmployees,
      search: search,
    });
  }
  //here we sort list of employees by name
  handleSortByName() {
    const sortAr = this.state.filteredEmployees;
    //if state is equal to "asc", then we order list of employees in ascending order
    if (this.state.sortType === "asc") {
      const sorted = sortAr.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      this.setState({
        filteredEmployees: sorted,
        sortType: "desc",
      });
    }
    //if state is NOT equal to "asc", then we order list of employees in descending order
    else {
      const sorted = sortAr.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      this.setState({
        filteredEmployees: sorted,
        sortType: "asc",
      });
    }
  }
  //here we sort list of employees by date of birth
  handleSortByDOB() {
    const sortAr = this.state.filteredEmployees;
    //if state is equal to "asc", then we order list of employees in ascending order
    if (this.state.sortType === "asc") {
      const sortDate = sortAr
        .sort(
          (a, b) =>
            new Date(a.dob.date).getTime() - new Date(b.dob.date).getTime()
        )
        .reverse();
      this.setState({
        filteredEmployees: sortDate,
        sortType: "desc",
      });
    }
    //if state is NOT equal to "asc", then we order list of employees in descending order
    else {
      const sortDate = sortAr.sort((a, b) =>
        new Date(a.dob.date) - new Date(b.dob.date) ? -1 : 1
      );
      this.setState({
        filteredEmployees: sortDate,
        sortType: "asc",
      });
    }
  }
  //here we render the page
  render() {
    const { search, employees, filteredEmployees } = this.state;
    return (
      <>
        <Navbar />
        <Search onSearch={this.handleEmployeeSearch} />
        <Table
          employees={search ? filteredEmployees : employees}
          onSortByName={this.handleSortByName}
          onSortByDOB={this.handleSortByDOB}
        />
      </>
    );
  }
}

export default App;
