// Import React
import React from "react";

// Import Images
import logo from "../Img/microsoft.png";

// Define Functional Component
const DashboardContent = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#23282D" }}
        className="text-white pt-5 ps-2 pe-2 pb-5 text-center"
      >
        <div className="row">
          <img
            src={logo}
            alt="company logo"
            style={{ height: "50px", width: "auto" }}
            className="col"
          />
          <span className="col ps-md-0 pt-2 fw-bold">MICROSOF</span>
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
          <i class="bi bi-bar-chart-line col p-0 m-0"></i>
          <div
            style={{ backgroundColor: "#23282D" }}
            className="text-white text-center col"
          >
            Growth
          </div>
        </div>
        {/* Customer  */}
        <div className="row ps-2 pe-2 pt-4 pb-4">
          <i class="bi bi-person-plus col p-0 m-0"></i>
          <div
            style={{ backgroundColor: "#23282D" }}
            className="text-white text-center col"
          >
            Customer
          </div>
        </div>
        {/* Review */}
        <div className="row ps-2 pe-2 pt-4 pb-4">
          <i class="bi bi-newspaper col p-0 m-0"></i>
          <div
            style={{ backgroundColor: "#23282D" }}
            className="text-white text-center col"
          >
            Review
          </div>
        </div>
        {/* Empty Div */}
        <div className="row ps-2 pe-2 pt-5 pb-5"></div>
        <div className="row ps-2 pe-2 pt-1"></div>
        {/* Logout */}
        <div className="row ps-2 pe-2 pt-4 pb-4">
          <i class="bi bi-box-arrow-left col p-0 m-0"></i>
          <div
            style={{ backgroundColor: "#23282D" }}
            className="text-white text-center col"
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};
// Export the class
export default DashboardContent;
