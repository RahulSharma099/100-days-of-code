const yargs = require("yargs");
const chalk = require('chalk');
const fs = require('fs');

const getNotes = function() {
    return 'your Notes...';
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    })


    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New Note is added!"));
    } else {
        console.log(chalk.red.inverse('Note title is taken!'));
    }

}

const removeNote = function(title) {
    const notes = loadNotes();
    const noteToKeep = notes.filter(function(note) {
        return note.title !== title;
    })
    if (notes.length > noteToKeep.length) {
        console.log(chalk.green.inverse("Note Removed"));
        saveNotes(noteToKeep);
    } else {
        console.log(chalk.red.inverse("No note found!!"))
    }
}



const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}