// Brings in the node Fs package into our program. 
const fs = require("fs");

/*Four methods of FS.
Che ks to see if the file exists: fs.existsSync();
Reads the file fs.readFileSync();
Write a new or existing file: fs.writeFileSync(); 
Use appemdFileSync to update file instead. */
fs.readFileSync("example.txt", "utf-8");

if (fs.existsSync("example.txt")){
    console.log("true")
};

//reading files and accessing the contents thought JS.
let content = fs.readFileSync("example.txt", "utf8");
console.log(content);
