// Import React
import React from "react";

// Importing Component
import SearchAndProfile from "./SearchAndProfile";
import Overview from "./Ovreview";

// Define Functional Component
const SideNav = () => {
  return (
    <div className="row m-0 pt-0">
      <div style={{ backgroundColor: "#ECECEC" }} className="col-4 pt-5 ps-2 pe-2 pb-5">
        <span className="fw-bold text-start">
          <h2>Overview</h2> 
        </span>
        <Overview />
      </div>
      <div
        style={{ backgroundColor: "#F1F1F1" }}
        className="col-8 ps-3 pt-2 pb-2 text-center"
      >
        <SearchAndProfile />
      </div>
    </div>
  );
};
// Export the class
export default SideNav;
