//JSON: Javascript Object Notation
//Saving a file and sendig it around the IntersectionObserverEntry.
let myObject = {
    "myName": "angie",
    "myJob": "SE",
    "favFood": "pizza"
};

// let converted = myObject.toString();
// console.log(converted);

JSON.stringify();

let converted = JSON.stringify(myObject);
console.log(typeof converted);

console.log("Saving object to file!");
fs.writeFileSync("savedData.json", myObject, "utf8");
console.log("finished")
