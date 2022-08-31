// Import React
import React from "react";

// Importing Component
import SearchAndProfile from "./SearchAndProfile";

// Define Functional Component
const SideNav = () => {
  return (
    <div className="row m-0 p-0">
      <div
        style={{ backgroundColor: "#F1F1F1" }}
        className="col-4 p-2 text-center"
      >
        <span>
          <bold>Overview</bold>
        </span>
      </div>
      <div
        style={{ backgroundColor: "#F1F1F1" }}
        className="col-8 p-2 text-center"
      >
        <SearchAndProfile />
      </div>
    </div>
  );
};
// Export the class
export default SideNav;
