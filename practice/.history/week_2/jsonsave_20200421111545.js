//convert the following object into JSON and save that JSON file inside of the homework folder of your repo.
fs = require(fs);
let objectToSave = {
    key1: "Some key",
    isTrue: false,
    someFunction: function() {console.log("hello");},
    totalAmount: 100900
}

myConvJson = JSON.stringify(objectToSave);
fs.writeFileSync("savedJson.js", myConvJson, "utf8");