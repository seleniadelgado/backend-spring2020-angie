//Asterisk means it may need to 

//Tells the node we want to use mongoose package
const mongoose = require("mongoose");

//string that holds the URL to contact the MongoDB Server.
const dbUrl = "mongodb+srv://monusr:password1234@cluster0-obwhs.mongodb.net/test?retryWrites=true&w=majority";

//Mongoose settings for setting up our connection.
const dbSettings = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};


//Making contact with our server using mongoose.connect
mongoose.connect(dbUrl, dbSettings, (error) => {
    if (error) {
        console.log("something bad happened")
        console.log(error);
    } else {
        console.log("Succesfully connected to db!")
    }
});

//A promise is an object that may produce a single value some time in the future : 
//either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). 
//A promise may be in one of 3 possible states: fulfilled, rejected, or pending
//passing a reference of the promise class to mongoose.
mongoose.Promise = global.Promise;

//Creating a interface to our connected database
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error: "));

//get a copy of the mongoose schema class to use.
let Schema = mongoose.Schema;

let practiceSchema = new Schema({
    "time": Number,
    "title": String,
    "status": Boolean
});


//let documents, or "collections be something that identifies what that collection is holding.
//Creates an object that refers to the collections on the MongoDB server, and also
//dictates what schema we will use with this collection.
let practiceModel = new mongoose.model("documents", practiceSchema);

/*
CRUD:
create: practiceMOdel.save();
Read: practiceModel.find();
Update: practiceModel.findByIDAndUpdate();
Delete: practiceModel.findByIdAndDelete();
*/
//We build our first mongoose object to save into MongoDB.
let myFirstDataToSave = new practiceModel({
    "time": 784623894769283756,
    "title": "A random time",
    "status": true,
    "notallowed": "This is not allowed."
})
//Build a JS object to save.
console.log("Saving Obj to MongoDB.")
myFirstDataToSave.save();
console.log("Saved!");

let myImportantObject = {
    time: Date.now()
};

myImportantObject = new practiceModel(myImportantObject);

myImportantObject.save();
//.save() END

//.find() START
practiceModel.find({"title": "A random time."},(error, results) => {
    console.log(results);
});

//.find END

//.findByIDAndUpdate()START
practiceModel.findByIdAndUpdate("4945749087650983457604398576", {"status": false},(error, results) => {
    console.log(results);
})