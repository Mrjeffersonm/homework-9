// TODO: Include packages needed for this application
// import { writeFile } from 'node:fs';
// import { Buffer } from 'node:buffer';
const fs = require('fs');
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {name:"title", message:'README Title'}, 
    {name:"description", message:'Description'},
    {name:"install", message:'Installation Instructions'},
    {name:"usage", message:'Usage Information'},
    {name:"contribution", message:'Contribution Guidelines'},
    {name:"tests", message:'Testing Instructions'},
    {type:"list", name:"license", message:'Which License', choices:['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', {value:'none', name:'None'}]},
    {name:"github", message:'Github Username'},
    {name:"email", message:'Email'}
];

inquirer
.prompt(questions)
.then((answers) => {
    console.log(answers)
    var markdown = generateMarkdown(answers)
    writeToFile("README.md", markdown)
}
)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {})
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
