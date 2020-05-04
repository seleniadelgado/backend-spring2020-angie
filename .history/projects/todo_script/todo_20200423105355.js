const fs = require('fs');
const filename = "note.json";
const data = {
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

    for (let i = 0; i < data.notes.length; i++) {
        console.log(`Note ${i + 1}: ${data.notes[i].note}`);
    }
} else if (process.argv[2]=== "new") {
    let newNote = {
        note: process.argv[3],
        completed_status: false
    }
    data.notes.push(newNote);
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log("Note successfully added!")
} else if (process.argv[2] === "edit") {
    data.notes[process.argv[3] - 1].note = process.argv[4];
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");

} else if (process.argv[2] === "delete") {
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    data.notes.splice(process.argv[3] - 1, 1);
}

