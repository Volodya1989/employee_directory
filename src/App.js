import React, { Component } from "react";
import API from "./utils/API";
import Search from "./components/Search";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor () {
    super();

    this.handleEmployeeSearch = this.handleEmployeeSearch.bind(this);
    this.handleSortByName = this.handleSortByName.bind(this);
    this.handleSortByDOB = this.handleSortByDOB.bind(this);

    this.state = {
      search: "",
      employees: [],
      filteredEmployees: [],
      sortType: "asc",
    };
  }

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

  handleEmployeeSearch(event) {
    const search = event.target.value;

    if (!search) {
      this.setState({ filteredEmployees: this.state.employees });

      return;
    }

    const filteredEmployees = this.state.employees.filter((employee) => {
      const { first: firstName, last: lastName } = employee.name;
      const name = `${firstName} ${lastName}`;

      return name.toLowerCase().includes(search.toLowerCase().trim());
    });

    this.setState({
      filteredEmployees,
      search: search,
    });
  };

  handleSortByName() {
    const sortAr = this.state.filteredEmployees;
    if (this.state.sortType === "asc") {
      const sorted = sortAr.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      this.setState({
        filteredEmployees: sorted,
        sortType: "desc",
      });
    } else {
      const sorted = sortAr.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      this.setState({
        filteredEmployees: sorted,
        sortType: "asc",
      });
    }
  };

  handleSortByDOB() {
    const sortAr = this.state.filteredEmployees;
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
    } else {
      const sortDate = sortAr.sort((a, b) =>
        new Date(a.dob.date) - new Date(b.dob.date) ? -1 : 1
      );
      this.setState({
        filteredEmployees: sortDate,
        sortType: "asc",
      });
    }
  };

  render() {
    const { search, employees, filteredEmployees } = this.state;

    return (
      <div className="container ">
        <Navbar />

        <div onClick={this.handleEmployeeSearch}>
          click
          </div>

        <Search onSearch={this.handleEmployeeSearch} />

        <Table
          employees={search ? filteredEmployees : employees}
          onSortByName={this.handleSortByName}
          onSortByDOB={this.handleSortByDOB}
        />
      </div>
    );
  }
}

export default App;
