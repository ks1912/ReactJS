// Import React
import React from "react";

// Import packages
import Piecharts from "./Piecharts";

// Declare class component
const Overview = () => {
  return (
    <div className="row">
      <div className="col-12 pt-5">
        <div className="row pt-5 pb-5">
          <span className="col pt-5 ps-5 fw-bold fs-4">KPIs</span>
          <span className="col pt-5">
            <i class="bi bi-three-dots-vertical"></i>
          </span>
        </div>
      </div>
      <div className="col-12">
        <div className="row pt-3">
          <span className="col ps-5  pb-2">
            <span className="row text-muted">Current MRR</span>
            <h3 className="row fw-bold">$855.4K</h3>
          </span>
          <div className="col pb-2 pt-3">
            <span class="badge bg-success">
              16%
              <i class="bi bi-graph-up-arrow ps-3 mt-2"></i>
            </span>
          </div>
          <hr style={{ width: "85%" }} />
        </div>
      </div>
      <div className="col-12">
        <div className="row pt-3">
          <span className="col ps-5  pb-2">
            <span className="row text-muted">Active Customer</span>
            <h3 className="row fw-bold">73.57%</h3>
          </span>
          <div className="col pb-2 pt-3">
            <span class="badge" style={{ backgroundColor: "#52B249" }}>
              17%
              <i class="bi bi-graph-up-arrow ps-3 mt-2"></i>
            </span>
          </div>
          <hr style={{ width: "85%" }} />
        </div>
      </div>
      <div className="col-12">
        <div className="row pt-3">
          <span className="col ps-5  pb-2">
            <span className="row text-muted">Current Customer</span>
            <h3 className="row fw-bold">172,754</h3>
          </span>
          <div className="col pb-2 pt-3">
            <span class="badge" style={{ backgroundColor: "#74BA6D" }}>
              21%
              <i class="bi bi-graph-up-arrow ps-3 mt-2"></i>
            </span>
          </div>
          <hr style={{ width: "85%" }} />
        </div>
      </div>
      <div className="col-12">
        <div className="row pt-3">
          <span className="col ps-5  pb-2">
            <div className="row">
              <span className="col pt-5 fw-bold fs-4">Analytics</span>
              <span className="col pt-5">
                <i class="bi bi-three-dots-vertical"></i>
              </span>
            </div>
          </span>
        </div>
      </div>
      <div className="col-12">
        <Piecharts />
      </div>
    </div>
  );
};

export default Overview;
