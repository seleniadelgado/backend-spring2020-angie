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
// the following makes sure that we have something in the arguments to store.
let valueToAdd = process.argv[2];

if (valueToAdd === undefined) {
    console.log("you need to provide a number after the filename to add to the list of numbers!");
    return;
} else if (isNaN(valueToAdd)) {
    console.log("The value you provided is not a number!")
    return;
} else {
    valueToAdd = parseInt(valueToAdd);
    //Add the number provided in the terminal and push it into the array held by the Object.
    persistentObject.numbersList.push(process.argv[2]);

    //Convert the persistentObject to a JSON string.
    let data = JSON.stringify(persistentObject);

    //"Replace" the new file with the new file.
    fs.writeFileSync(filename, data, "utf-8");

    console.log(persistentObject);
}