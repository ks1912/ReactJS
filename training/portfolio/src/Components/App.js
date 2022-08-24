// Import React
import React from "react";

// Import Packages or Apps
import navBar from "./navBar";

// Import a style
import "../Style/App.css";

// Methods
const App = () => {
  const webpageContent = () => {
    return <div className="content"> {navBar()}</div>;
  };

  const webpageComingSoon = () => {
    return (
      <div className="websiteComingSoon">
        <h1>WEBSITE COMING SOON </h1>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-text">coming soon</div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {webpageContent()}
      {webpageComingSoon()}
    </div>
  );
};

export default App;
