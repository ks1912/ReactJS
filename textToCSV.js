// Import module
const fs = require("fs");

// Text to be stored in csv file
let s = `This is my file
showing some data
data1 = 12
data2 = 156`;

// Function to create text to csv
const textToCSV = () => {
  // 1. Split the lines
  // 2. Split each words using spaces and join them using coma(,)
  // 3. Rejoin the lines
  let text = s
    .split("\n")
    .map((line) => line.split(/\s+/).join(","))
    .join("\n");
  // Save the data in csv format
  fs.writeFileSync("dataNew.csv", text);
  // Print Task completion
  console.log("Task Completed");
};

textToCSV();
