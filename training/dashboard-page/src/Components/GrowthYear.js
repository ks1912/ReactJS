// Import React
import React from "react";

// Create functional component
const GrowthYear = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 pt-0 mt-0">
          <span className="float-start fw-bold fs-4">This Year Growth</span>
        </div>
        <div className="col-md-6 pt-0 mt-0">
          <div className="input-group date">
            <span class="input-group-text border-0" id="basic-addon1">
              <i class="bi bi-calendar3"></i>
              <input
                type="text"
                style={{ backgroundColor: "#F1F1F1" }}
                className="form-control col border-0"
                value="12-02-2012"
              />
            </span>
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-th"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthYear;
