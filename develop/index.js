// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'list',
            name: 'Table of Contents',
            message: 'Table of Contents?',
            choices: ['Description', 'Installation', 'Usage', 'Contribution', 'Testing', 'License', 'Questions'],
        },
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
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your contact email.',
        },
    ]);

const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
