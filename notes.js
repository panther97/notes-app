console.log('starting notes.js');

const fs = require('fs')

var addNote = (title, body)=>{
    var notes = [];
    var note = {
        title,
        body
    }
    try{
         var existing_notes = fs.readFileSync('notes-data.json');
         notes = JSON.parse(existing_notes);
    }
   catch(e){
        
   }
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var findNote = (title)=>{
    var notestring = fs.readFileSync('notes-data.json')
    var notes = JSON.parse(notestring);
    var filterednotes = notes.filter((note) => note.title === title)
    return filterednotes[0];
}

var deleteNote = (title)=>{
    var notestring = fs.readFileSync('notes-data.json')
    var notes = JSON.parse(notestring);
    var filterednotes = notes
    notes = notes.filter((note) => note.title !== title)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    return notes.length !== filterednotes.length;
}
var updateNote = (title, body)=>{
    var notestring = fs.readFileSync('notes-data.json')
    var notes = JSON.parse(notestring);
    notes.filter((note) =>{
        if(note.title === title){
            note.body = body
        }
    }
     )
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
module.exports = {
addNote,
findNote,
deleteNote,
updateNote
}