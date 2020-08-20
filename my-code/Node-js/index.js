const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

var notes = getNotes();
console.log(chalk.green("Success!!"));
console.log(notes);
console.log(validator.isURL('https://mead.io'));