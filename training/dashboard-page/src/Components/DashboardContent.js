// Import React
import React from "react";

// Import Images
import logo from "../Img/microsoft.png";

// Define Functional Component
const DashboardContent = () => {
  return (
    <div className="col-sm-2 m-0 p-0">
      <div
        style={{ backgroundColor: "#23282D" }}
        className="text-white p-5 text-center"
      ></div>
      <div
        style={{ backgroundColor: "#23282D" }}
        className="text-white p-2 text-center"
      >
        <div className="row">
          <img
            src={logo}
            alt="company logo"
            style={{ height: "50px", width: "auto" }}
            className="col"
          />
          <span className="col pt-2 fw-bold">MICROSOF</span>
        </div>
        <div
          style={{ backgroundColor: "#23282D" }}
          className="text-white p-5 text-center"
        ></div>
        {/* Overview */}
        <div className="row ps-2 pe-2 pt-4 pb-4">
          <i class="bi bi-info-circle col p-0 m-0"></i>
          <div
            style={{ backgroundColor: "#23282D" }}
            className="text-white text-center col"
          >
            Overview
          </div>
        </div>
        {/* Growth */}
        <div className="row ps-2 pe-2 pt-4 pb-4">
          <i class="bi bi-info-circle col p-0 m-0"></i>
          <div
            style={{ backgroundColor: "#23282D" }}
            className="text-white text-center col"
          >
            Growth
          </div>
        </div>
        {/* Customer  */}
        <div className="row ps-2 pe-2 pt-4 pb-4">
          <i class="bi bi-info-circle col p-0 m-0"></i>
          <div
            style={{ backgroundColor: "#23282D" }}
            className="text-white text-center col"
          >
            Customer
          </div>
        </div>
        {/* Review */}
        <div className="row ps-2 pe-2 pt-4 pb-4">
          <i class="bi bi-info-circle col p-0 m-0"></i>
          <div
            style={{ backgroundColor: "#23282D" }}
            className="text-white text-center col"
          >
            Review
          </div>
        </div>
      </div>
    </div>
  );
};
// Export the class
export default DashboardContent;
