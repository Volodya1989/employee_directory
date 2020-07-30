import React from "react";
import Search from "./components/Search";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Table />
    </div>
  );
}

export default App;
