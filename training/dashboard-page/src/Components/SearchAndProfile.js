// Import React
import React from "react";

// Import Components
import GrowthYear from "./GrowthYear";
import Barchart from "./Barchart";
import RecentActivities from './RecentActivities';

// Import images
import profilePic from "../Img/man.png";

// Create a Functional Component
const SearchAndProfile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <input
              style={{ backgroundColor: "#F1F1F1" }}
              type="text"
              className="form-control col border-end-0"
              placeholder="Search"
            />
            <span
              className="input-group-text col-2 border-start-0"
              id="basic-addon2"
              style={{ backgroundColor: "#F1F1F1" }}
            >
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
        <div className="col-md-1">
          <i className="bi bi-app-indicator float-end pt-1"></i>
        </div>
        <div className="col-md-5 pt-1 ps-0">
          <div className="row">
            <div className="col-md-4">
              <img
                src={profilePic}
                alt="logo"
                style={{ height: "25px", width: "25px" }}
                className="float-end col"
              />
            </div>
            <div className="col-md-6">
              <span className="float-end">Kunal Singh</span>
            </div>
            <div className="col-md-2">
              <a className="dropdown-item float-start" href="#">
                <i class="bi bi-chevron-compact-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 pt-5">
        <div className="row pt-5 pb-5">
          <span className="col pt-5"></span>
          <span className="col pt-5"></span>
        </div>
      </div>
      <GrowthYear />
      <Barchart />
      <RecentActivities />
    </div>
  );
};

export default SearchAndProfile;
