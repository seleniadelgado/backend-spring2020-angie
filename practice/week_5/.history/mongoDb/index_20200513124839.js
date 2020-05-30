//Tells the node we want to use mongoose package
const mongoose = require("mongoose");

//string that holds the URL to contact the MongoDB Server.
const dbUrl = "mongodb+srv://monusr:password1234@cluster0-obwhs.mongodb.net/test?retryWrites=true&w=majority";

const dbSettings = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};



mongoose.connect(dbUrl, dbSettings, (error) => {
    if (error) {
        console.log("something bad happened")
        console.log(error);
    } else {
        console.log("Succesfully connected to db!")
    }
});