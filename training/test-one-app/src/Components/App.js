// Import React Files
import React from "react";

// Import Components or Declare Component
import Box from "./Box";
import Navigation from "./Navigation";
import Footer from "./Footer";

// App Method
const App = () => {
  return (
    <div style={{ marginRight: "5%", marginLeft: "5%" }}>
      <Navigation />
      <div style={{ marginBottom: "1%" }}></div>
      <Box />
      <div style={{ marginBottom: "1%" }}></div>
      <Footer />
    </div>
  );
};

// Export the App
export default App;
