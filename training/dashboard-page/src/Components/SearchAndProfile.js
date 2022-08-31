// Import React
import React from "react";

// Import images
import profilePic from "../Img/man.png";

// Create a Functional Component
const SearchAndProfile = () => {
  return (
    <div className="row">
      <div className="col-md-5">
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
      <div className="col-md-5 pt-2">
        <img
          src={profilePic}
          alt="logo"
          style={{ height: "25px", width: "25px" }}
        />
      </div>
    </div>
  );
};

export default SearchAndProfile;
