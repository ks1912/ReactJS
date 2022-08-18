// Import module
const fs = require("fs");

// Array to be stored in csv file
const rows = [
  ["name1", "city1", "some other info"],
  ["name2", "city2", "more info"],
];

const arrayToCSV = () => {
  // Variable declaration
  let csvContent = "";

  // Transform the array data
  rows.forEach(function (rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  // Function to create text to csv
  fs.writeFileSync("data.csv", csvContent);

  // Print Success Message
  console.log("Array sucessfull converted to CSV and downloaded");
};

// Call the function
arrayToCSV();
