//Topics used in this file are: FS package, JSON, JS objs.

//Placeholder for our object
let persistentObject = null;

//The file we are working with so we don't accidentally use another string.
let filename = "persistenObject.json";

//Check if file exists or not.
let doesFileExists = fs.existsSync(filename);

//if exists...
if (doesFileExist){
    //..read it...
    let existingJSON = fs.readFileSync(filename);
    console.log(`Read file: "${existingJSON}"`);

    // ... convert it to an Onject...
    persistentObject = JSON.parse(existingJSON);
    console.log(`Object converted from JSON:`);
} else {
    //..create a new file if it doesnt eexist...
    console.log("file does not exist, creating new file");
    fs.writeFileSync(filename, `{"numbersList": []}`, "utf8");

    //..load new object for our persistentObject
    persistentObject = {numbersList: []};
}
persistentObject.numbersList.push(process.argv[2]);

let data = JSON.stringify(persistentObject);

fs.writeFileSync(filename, data, "utf-8");

console.log(persistentObject);