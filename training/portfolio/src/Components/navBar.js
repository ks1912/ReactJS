// Import React
import React from "react";

// Import a style
import "../Style/App.css";

// Import Icons
import info from "../Image/help.png";

// Methods
const navBar = () => {
  const navSection = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <ul className="nav bg-info">
            <li className="nav-item col-2">
              <a className="nav-link text-white" aria-current="page" href="#">
                {/* <i className="bi bi-info-circle pe-1"></i> */}
                <img
                  src={info}
                  alt="infomarion icon"
                  className="pe-1"
                  style={{ height: "10%", width: "10%" }}
                />
                ABOUT ME
              </a>
            </li>
            <li className="col-8">
              <p className="text-center nav-link text-white m-0">KUNAL SINGH</p>
            </li>
            <li className="nav-item float-right">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-megaphone-fill"></i>
              </a>
            </li>
            <li className="nav-item float-right">
              <a className="nav-link text-white" href="#">
                <a
                  href="https://www.flaticon.com/free-icons/rainbow"
                  title="rainbow icons"
                ></a>
              </a>
            </li>
            <li className="nav-item float-right">
              <a className="nav-link text-white" href="#">
                <a
                  href="https://www.flaticon.com/free-icons/rainbow"
                  title="rainbow icons"
                >
                  <i class="bi bi-megaphone-fill"></i>
                </a>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-clock"></i>
              </a>
            </li>
            <li className="nav-item float-right">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-battery-full"></i>
              </a>
            </li>
            <li className="nav-item float-right">
              <a className="nav-link text-white" href="#">
                <i className="bi bi-volume-up"></i>
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
