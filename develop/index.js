const inquirer = require('inquirer');
const path = require('path')
const fs = require('fs');
const build = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Title of Project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Description of Project?',
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
        message: 'Contributors?',
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
        message: 'Enter your contact email',
    },
]



// function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
inquirer
  .prompt(questions)
  .then(answers => {
      console.log('test')
    writeToFile("README.md", build({...answers}))
    console.log('readme gen')
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
      console.log(error)
    }
  });
 }

// function call to initialize program
init();
