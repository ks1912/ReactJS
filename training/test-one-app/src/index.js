// Import React Files
import React from "react";
import ReactDom from "react-dom";

// Import Components or Declare Component
const App = () => {
  return (
    <div style={{ paddingTop: "140px" }}>
      <center>
        <h1>I am back</h1>
        <h2>Kunal Singh</h2>
        <h5>ks1912</h5>
      </center>
    </div>
  );
};
// Render Components
ReactDom.render(<App />, document.querySelector("#root"));
