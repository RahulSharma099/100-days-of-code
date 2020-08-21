const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of add',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//create a Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
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

//console.log(yargs.argv);
yargs.parse();