//setting up express server.
//fs allows you to work with the file system on your computer.
//express allows you to use express
//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

//creates a new express application.
const app = express();

//To use http server and client you must use this.
const http = require("http").Server(app);

const port = 3000;

//app.use binds application-level middlware to an instance of the app object.
//expres.static serves static assets such as HTML files, images, and so on.
app.use("/", express.static("public_html/"));

//having http listening on a port.
http.listen(port);
console.log(`Express server is running on port ${port}`);
//Finished Express server setup
//Setting up body-parser with express.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Finished connecting body-parsing with Express.


//Setting up our save file.
const filename = "./users/default_user.json";
let data = {
    "notes": []
};

if (fs.existsSync(filename)) {
    const read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {
    const converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}
//Finished setting up save file.

//Class definition for notes.
class Note {
    constructor(note, author) {
        this.note = note;
        this.author = author;
        this.completed_status = false;
        this.create_date = Date.now();
    }
}
//End Class definition for notes

//Todo Routes
//http://localhost:3000/coolFilesWebpage
//app.use("/", express.static("public/html/"));

//Route for new notes.
app.post("/newNote", (request, response) => {
    let receivedData = request.body;
    let newNoteObject = new Note(receivedData.note, receivedData.author);
    console.log('hello angie', receivedData);
    data.notes.push(newNoteObject);
//data.notes.push(new Note(request.body.note, request.body.author));

//Save data object to json file.
    let converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");

//Building object to send back.
    let dataToSend = {
        saveStatus: 0
    }
    console.log("new note")
    response.send(dataToSend);
 });
//Route for a specific note.

//Route for deleting a specific note.
app.post("/deleteNote", (req, res) => {
    let noteToDelete = req.body;

    //Combine the create date number and author to create a unique "id".
    let noteID = noteToDelete.create_date + noteToDelete.author;

    for (let i = 0; i < data.notes.length; i++) {
        let currentNote = data.notes[i];
        console.log('this is data', data);
        let currentNoteID = currentNote.create_date + currentNote.author;

        if (noteID === currentNodeID) {
            data.notes.splice(i, 1);

            //Save data object to json file.
            let converted = JSON.stringify(data);
            fs.writeFileSync(filename, converted, "utf8");

            let dataToSend = {
                deleteStatus: 0
            }

            res.send(dataToSend);
            return; //stops the whole function, including the loop.
            //break; //stopr the whole loop.
            } else {
                continue; // goes to the next loop.
            }
        }
        let dataToSend = {
            deleteStatus: 1
        }
        res.send(dataToSend);
});
//Route for Update
app.post("/update_note", (res, req) => {
        let noteToUpdate = res.body;
        const noteToUpdateID = res.body.create_date = res.body.author;

//going through each item in the array.
        for (let i = 0; i < data.notes.length; i++) {
            let currentNote = data.notes[i];
            const currentNodeID = currentNote.create_date + currentNote.author;
            if (noteToUpdateID === currentNoteID) {
                currentNote.note = noteToUpdate.updated_note;
//Save data obj to json file.
                const converted = JSON.stringify(data);
                fs.writeFileSync(filename, converted, "utf8");

                const dataToSend = {
                    updatedStatus: 0
                };
                res.send(dataToSend);
                return;
            }
            else {
                continue;
            }
        }
        const dataToSend = {
            updateStatus: 1
        }
        res.send(dataToSend);
});

//Route for marking a note complete.
app.post("/markComplete", (req, res) => {
    let noteToDelete = req.body;

//Combine the create date number and author to create a unique "id".
    let noteID = noteToComplete.create_date + noteToComplete.author;

    for (let i = 0; i < data.notes.length; i++) {
        let currentNote = data.notes[i];
        let currentNoteID = currentNote.create_date + currentNote.author;

        if (noteID === currentNodeID) {
            data.notes[i].completed_status = true;

//Save data object to json file.
            let converted = JSON.stringify(data);
            fs.writeFileSync(filename, converted, "utf8");

            let dataToSend = {
                markedComplete: 0
            }

            res.send(dataToSend);
            return;
//stops the whole function, including the loop.
//break; //stopr the whole loop.
           } else {
               continue;
// goes to the next loop.
           }
        }
       let dataToSend = {
           markedComplete: 1
       }
       res.send(dataToSend);
});
//Route for reading all notes.
app.post("/readNotes", (req, res) => {
    res.send(data);
});