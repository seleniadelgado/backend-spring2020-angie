const fs = require("fs");
const file = "practice1.txt"

// check if the file exists...
if (fs.existsSync(file)) {
    console.log("File '" + file + "' was found")
    let data = fs.readFileSync(file, "utf8");
    console.log("The contents of the file are: '" + data + "'")
} else {
    console.log("File "+ file + " was not found");
    console.log("Creating file with the name '" + file +"'");
    fs.writeFileSync(file, "", "utf8");
    console.log("Finished creating file");
}