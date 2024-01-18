const inquirer = require('inquirer');
const classes = require('../Assets/classes');

// creating an array of question to construct the SVG logo

const questions = [{
    type: "list",
    name: "shape",
    message: "What shape is your logo?",
    choices: ["Circle", "Square", "Triangle"]
},
{
    type: "input",
    name: "letters",
    message: "Please type which three letters you would like to display inside the logo."
},
{
    type: "list",
    name: "letter-color",
    message: "What color lettering should be generated?",
    choices: ["White", "Black", "Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
},
{
    type: "list",
    name: "shape-color",
    message: "What color shape should be generated?",
    choices: ["White", "Black", "Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
}]

function init() {
    inquirer.prompt(questions)
.then((inquirerAnswers) => {
console.log(inquirerAnswers);
});
}