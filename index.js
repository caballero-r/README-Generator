// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please provide the title for your project.',
        validate: (projectTitle) => {
            if (projectTitle) {
                return true;
            } else {
                console.log('Please provide a title for this project to continue.')
                return;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the a short description for this project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install this project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to usage this project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide instructions on how to make contribution to this project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on how one can test this project'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please provide the title for your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license to add to your README.',
        choices: ['Apache 2.0', 'Boost', 'BSD 2-Clause', 'None']
    },
    {
        type: 'input',
        name: 'resources',
        message: 'Please provide the a link to any resources you used.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide the github username of any contributors to this project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: (github) => {
            if (github) {
                return true;
            } else {
                console.log('Please provide your github username to continue.')
                return;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (email) => {
            if (email) {
                return true;
            } else {
                console.log('Please provide your email to continue.')
                return;
            }
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Successfully generated your ReadME! Your ReadMe is titled "README". Go view it now'));
}

// TODO: Create a function to initialize app
function init() {
    console.log('Please answer the following questions to generate your ReadMe document.')

    inquirer
    .prompt(questions)
    .then((readMeData) => {
        writeToFile('.README.md', generateMarkdown(readMeData))
    })
}

// Function call to initialize app
init();
