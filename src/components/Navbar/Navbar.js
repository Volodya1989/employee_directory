import React from "react";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <div className="navbar navbar-nav nav-fill w-100">
      <div className="raw">
        <h1 className="navHeader">Employee Directory</h1>
        <h5>
          Click on NAME or DOB header to filter or use the search box to narrow
          your results
        </h5>
      </div>
    </div>
  );
};

export default Navbar;
