const inquirer = require('inquirer');
const fs = require('fs');
const build = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Description?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation Instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Usage Information?',
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Constributors?',
    },
    {
        type: 'input',
        name: 'Testing',
        message: 'Test Instructions?',
    },
    {
        type: 'list',
        name: 'Licenses',
        message: 'Licenses?',
        choices: ['A', 'B', 'C', 'D'],
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your contact email.',
    },
],


// function to write README file
function writeToFile(fileName, data) { }

// function to initialize program
function init() { }

// function call to initialize program
init();
