// Import React Files
import React from "react";
import ReactDOM from "react";

import bgOne from "../Images/backgroundImageOne.jpg";
import bgTwo from "../Images/backgroundImageTwo.jpg";
import bgThree from "../Images/backgroundImageThree.jpg";

const headerBox = ({ props }) => {
  const imageAndTextDisplay = () => {
    return (
      <div>
        // First Image
        <div className="carousel-item active">
          <img
            src={bgOne}
            className="img-fluid rounded"
            style={{ height: "300px", width: "100%" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        // Second Image
        <div className="carousel-item">
          <img
            src="https://t3.ftcdn.net/jpg/04/34/10/08/360_F_434100803_wCDBPHkVXP9gIDizFYtQSLPillD9AAmw.jpg"
            className="img-fluid rounded"
            style={{ height: "300px", width: "100%" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        // Third Image
        <div className="carousel-item">
          <img
            src={bgThree}
            className="img-fluid rounded"
            style={{ height: "300px", width: "100%" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
    );
  };
  return <div>{imageAndTextDisplay()}</div>;
};

export default headerBox;
