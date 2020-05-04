const fs = require('fs');
const filename = "note.json";
let data = {
    "notes":[],
    "status":[],
    "date":[]
}

if (fs.existsSync(filename)){
    let read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
}  else {
    fs.writeFileSync(filename, )
}
//detect the third argument, possible options: new, edit, delete, list
if (process.argv[2] === undefined || process.argv[2] === "list") {
    listNotes();

} else if (process.argv[2]=== "new") {
    let newNote = {
        note: process.argv[3],
        completed_status: false
    }
    data.notes.push(newNote);
    //convert following line to a function.
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Note successfully added!")
    listNotes();

} else if (process.argv[2] === "edit") {

    data.notes[process.argv[3] - 1].note = process.argv[4];
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Update Note!")
    listNotes();

} else if (process.argv[2] === "delete") {
    if (process.argv[3] != isNaN(process.argv[3])) {
        console.log("Hey, use digits!");
        return;
    }
    else if (process.argv[3] <= 0) {
        console.log("Hey, use positives");
        return;
    }
    else if (process.argv[3] == null) {
        console.log("Hey, which note?");

    }
    else {
    data.notes.splice(process.argv[3] - 1, 1);
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Note Deleted succesfully. = .(");
    listNotes();
    }
} else if (process.argv[2] === "done") {
    data.notes[process.argv[3] -1].comepleted_status = true;
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Note marked as completed! =)");
} else {
    console.log(`
        Welcome to my TODO script! The following commands can be typed after"node todo.js":
        1) new: Creates a new note, the argument after should be the note text.
        2) edit: edits an existing note, the argument after edit should be the note number, and after that the note text.
        3) delete: deleted an existing note, the argument after delete should be the note number.
        4) done: marks an existing note as done, the argument after done should be the note number;`);
}

function listNotes() {
    for (let i = 0; i < data.notes.length; i++) {
        let currentNote = data.notes[i];
        //ternary operator is like a 1 line
        let status = data.notes[i].completed_status ? "Completed":
        console.log(`Note ${i + 1}: ${data.notes[i].note}`);
    }
}

