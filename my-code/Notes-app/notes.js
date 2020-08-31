const yargs = require("yargs");
const chalk = require('chalk');
const fs = require('fs');
const { title } = require("process");

const getNotes = () => {
    return 'your Notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)

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

const removeNote = (title) => {
    const notes = loadNotes();
    const noteToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > noteToKeep.length) {
        console.log(chalk.green.inverse("Note Removed"));
        saveNotes(noteToKeep);
    } else {
        console.log(chalk.red.inverse("No note found!!"))
    }
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.red.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })

}

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title)
    if (findNote) {
        console.log(chalk.blue.inverse(findNote.title))
        console.log(findNote.body)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}