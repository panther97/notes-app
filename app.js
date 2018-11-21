console.log('running app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;
const command = process.argv[2];

if(command == "add"){
   notes.addNote(argv.title, argv.body);
}
else if(command == "find"){
   note = notes.findNote(argv.title);
   if(note){
       console.log('note found')
       console.log(`title: ${note.title}`)
       console.log(`body: ${note.body}`)
   }
   else{
       console.log('note not found')
   }
}

else if(command == "delete"){
    note = notes.deleteNote(argv.title);
    if(note){
        console.log('note deleted')
    }
    else{
        console.log('note not found')
    }
 }
 else if(command == "update"){
     notes.updateNote(argv.title, argv.body);
 }
else{
    console.log('invalid command');
}

