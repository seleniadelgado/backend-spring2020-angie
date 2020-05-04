const fs = require("fs");
const file = "practice.txt"

// check if the file exists...
if (fs.existsSync(file)) {
    console.log("File '" + file + "' was found")
} else {
    console.log("File "+ file + " was not found");
}