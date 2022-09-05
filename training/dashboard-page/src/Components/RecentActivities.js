// Import React
import React from "react";

// Import packages and images
import manOne from "../Img/manOne.png";
import manTwo from "../Img/manTwo.png";
import womanOne from "../Img/womanOne.png";

// Create a functional component
const RecentActivities = () => {
  return (
    <div className="container pt-5 m-0">
      {/* Resent Activities Header */}
      <div className="row">
        <div className="col-md-6">
          <span className="fs-3 float-start pt-3 mt-2 pb-5 ps-0">Recent Activities</span>
        </div>
        <div className="col-md-6">
          <div class="btn-group float-end pt-3">
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
            <th className="pb-3"></th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Order Number</th>
            <th className="pb-3">Retained</th>
            <th className="pb-3">Amount</th>
          </tr>
          {/* Woman One */}
          <tr>
            <td>
              <img
                src={womanOne}
                alt="lady image"
                style={{ width: "40px", height: "40px" }}
              />
            </td>
            <td>Jeny Wilsone</td>
            <td>New Customer</td>
            <td>#0038160</td>
            <td>1 min ago</td>
            <td>$123.40</td>
          </tr>
          {/* Man One */}
          <tr>
            <td>
              <img
                src={manOne}
                alt="lady image"
                style={{ width: "40px", height: "40px" }}
              />
            </td>
            <td>Jeny Wilsone</td>
            <td>New Customer</td>
            <td>#0038160</td>
            <td>1 min ago</td>
            <td>$123.40</td>
          </tr>
          {/* Man Two */}
          <tr>
            <td>
              <img
                src={manTwo}
                alt="lady image"
                style={{ width: "40px", height: "40px" }}
              />
            </td>
            <td>Jeny Wilsone</td>
            <td>New Customer</td>
            <td>#0038160</td>
            <td>1 min ago</td>
            <td>$123.40</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

// Export the app
export default RecentActivities;
