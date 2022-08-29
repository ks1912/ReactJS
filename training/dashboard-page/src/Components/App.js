// Import React
import React from "react";

// Import Components
import DashboardContent from "./DashboardContent";
import SideNav from "./SideNav";

const App = () => {
  return (
    <div className="pt-5">
      <div className="container" style={{ backgroundColor: "#DADADA" }}>
        <div className="container p-5">
          <div className="row">
            <DashboardContent />
            <SideNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
