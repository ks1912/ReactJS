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
            <div className="col-2 m-0 p-0">
              <DashboardContent />
            </div>
            <div className="col-10 m-0 p-0">
              <SideNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
