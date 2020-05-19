//setting up express server.
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const http = require("http").Server(app);

const port = 3000;

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
 //Class definition for notes
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

     data.notes.push(newNoteObject);
     //data.notes.push(new Note(request.body.note, request.body.author));

     //Save data object to json file.
     let converted = JSON.stringify(data);
     fs.writeFileSync(filename, converted, "utf8");

     //Building object to send back.
     let dataToSend = {
         saveStatus: 0
     }
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

 //Route for marking a note complete.
 //Route for reading all notes.
 //http://localhost:3000/readNotes
 app.post("/readNotes", (req, res) => {
     res.send(data);
 });