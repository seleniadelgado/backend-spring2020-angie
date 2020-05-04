// Brings in the node Fs package into our program. 
const fs = require("fs");

/*Four methods of FS.
Che ks to see if the file exists: fs.existsSync();
Reads the file fs.readFileSync();
Write a new or existing file: fs.writeFileSync(); 
Use appemdFileSync to update file instead. */
fs.readFileSync("example.txt", "utf-8");

fs.existsSync("example.txt");