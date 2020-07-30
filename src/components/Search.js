import React, { Component } from "react";
import API from "./API";

export default class Search extends Component{

    state = {
        employees: [{}],
        filteredEmployees: [{}]
    }
   

    handleSearch = (event) => {
        const search = event.target.value;
        console.log(search);
      };

      componentDidMount(){
          API.getUsers(). then(results => {
              console.log("Results: "+JSON.stringify(results));
              this.setState({users: results.data.results})
          })
      }
      

       render(){
            
        return (
          <div>
            <form>
              <input
                className="search"
                placeholder="search"
                onChange={(e) => this.handleSearch(e)}
              />
            </form>
          </div>
        );
      };
    };



// export default Search;
