// Import React Files
import React from "react";
import "../Style/navigation.css";

const Navigation = () => {
  const navDefination = () => {
    return (
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link text-decoration-underline fs-6 text-secondary"
              aria-current="page"
              href="#"
            >
              Active
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle fs-6 text-secondary"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item fs-6 text-secondary" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-6 text-secondary" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-6 text-secondary" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item fs-6 text-secondary" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-6" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled fs-6 "
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    );
  };
  return <div>{navDefination()}</div>;
};

export default Navigation;
