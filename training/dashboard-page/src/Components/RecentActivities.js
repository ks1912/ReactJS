// Import React
import React from "react";

// Create a functional component
const RecentActivities = () => {
  return (
    <div className="container pt-5 m-0">
      {/* Resent Activities Header */}
      <div className="row">
        <div className="col-md-6">
          <span className="fs-3 float-start pt-0 ps-0">Recent Activities</span>
        </div>
        <div className="col-md-6">
          <div class="btn-group float-end pt-0">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Last 24h
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  12h
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  6h
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  3h
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Resent Activities Body */}
      <div className="row">
        <table class="table text-start table-borderless">
            <tr>
                <th>Customer</th>
                <th>Status</th>
                <th>Order Number</th>
                <th>Retained</th>
                <th>Amount</th>
            </tr>
            <tr>
                <th>Jeny Wilsone</th>
                <th>New Customer</th>
                <th>#0038160</th>
                <th>1 min ago</th>
                <th>$123.40</th>
            </tr>
        </table>
      </div>
    </div>
  );
};

// Export the app
export default RecentActivities;
