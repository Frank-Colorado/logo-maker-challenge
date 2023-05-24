// require the inquirer package
const inquirer = require("inquirer");
// require the fs package
const fs = require("fs");
// require the shape classes from the shapes.js file
const { Circle, Square, Triangle } = require("./libs/shapes");
// require the questions from the questions.js file
const questions = require("./libs/questions");

const init = async () => {
  const answers = await inquirer.prompt(questions);
  const { text, textColor, shapeColor, shape } = answers;
  let shapeObj;
  switch (shape) {
    case "Circle":
      shapeObj = new Circle(text, textColor, shapeColor);
      break;
    case "Square":
      shapeObj = new Square(text, textColor, shapeColor);
      break;
    case "Triangle":
      shapeObj = new Triangle(text, textColor, shapeColor);
      break;
    default:
      throw new Error("Invalid shape");
  }
};
