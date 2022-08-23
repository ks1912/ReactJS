// Import React
import React from "react";

// Import a style
import "../Style/App.css";

// Methods
const navBar = () => {
  const leftSideContent = () => {};
  const rightSideContent = () => {};
  const navSection = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <ul className="nav bg-info">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">
                <i class="bi bi-info-circle pe-1"></i>
                ABOUT ME
              </a>
            </li>
            <li className="col-9">
                <p className="text-center nav-link text-white m-0">KUNAL SINGH</p>
            </li>
            <li className="nav-item float-right">
              <a className="nav-link text-white" href="#">
                <i class="bi bi-megaphone-fill"></i>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="#">
                <i class="bi bi-clock"></i>
              </a>
            </li>
            <li className="nav-item float-right">
              <a className="nav-link text-white" href="#">
                <i class="bi bi-battery-full"></i>
              </a>
            </li>
            <li className="nav-item float-right">
              <a className="nav-link text-white" href="#">
                <i class="bi bi-volume-up"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return <div>{navSection()}</div>;
};

// Export
export default navBar;

// f635d7cd055760f8b068b9ad288e40528c5622eb