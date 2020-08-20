const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    handler: function() {
        console.log('Adding a new Note');
    }
})

//create a Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    handler: function() {
        console.log("Removing a note");
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'list of notes',
    handler: function() {
        console.log("Listing a new note");
    }
})

//create a remove command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log("Reading a note");
    }
})

console.log(yargs.argv);