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
