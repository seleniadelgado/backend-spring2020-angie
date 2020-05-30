//dataset file size limit: 50mb
const fs = require("fs");
const filename = "dataset_sample.csv";

let dataset = fs.readFileSync(filename, "utf8");

let dataset = fs.readFileSync(filename, "utf8");
let datasetArray = dataset.split("\n");
console.log(datasetArray);

