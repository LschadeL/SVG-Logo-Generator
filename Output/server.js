const inquirer = require('inquirer');
const fs = require('fs');
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

function chooseShape(response) {
    if (response.shape === "Circle") {
        const logoShape = new Circle (response.shapeColor, response.text, response.textColor);
        return logoShape.render();
    } else if (response.shape === "Triangle") {
        const logoShape = new Triangle (response.shapeColor, response.text, response.textColor);
        return logoShape.render();
    } else if (response.shape === "Square") {
        const logoShape = new Square (response.shapeColor, response.text, response.textColor);
        return logoShape.render();
    };
};

function init() {
    inquirer.prompt(questions)
.then((response) => {
console.log(response);
});
}