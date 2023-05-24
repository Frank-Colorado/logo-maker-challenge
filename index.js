const inquirer = require("inquirer");
// require the fs package
const fs = require("fs");
// require the shape classes from the shapes.js file
const { Circle, Square, Triangle } = require("./libs/shapes");
// require the questions from the questions.js file
const { questions } = require("./libs/questions");

// This is an async function called init
// It has 0 parameters
const init = async () => {
  try {
    // inquirer.prompt is called with the questions array
    // The answers are destructured into the variables text, textColor, shapeColor, and shape
    const answers = await inquirer.prompt(questions);
    const { text, textColor, shapeColor, shape } = answers;
    // A variable called logoShape is declared
    let svgString;
    // A switch statement is used to create a new shape object based on the shape variable
    switch (shape) {
      case "circle":
        const circle = new Circle(text, textColor, shapeColor);
        svgString = circle.render();
        break;
      case "square":
        const square = new Square(text, textColor, shapeColor);
        svgString = square.render();
        break;
      case "triangle":
        let triangle = new Triangle(text, textColor, shapeColor);
        svgString = triangle.render();
        break;
      default:
        console.log("Invalid shape");
        return;
    }

    // The svg file is written to the examples folder using the render method of the logoShape object
    fs.writeFile("./examples/logo.svg", svgString, (err) =>
      // If there is an error, log the error, otherwise log that the file was generated
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  } catch (error) {
    console.log({ error });
  }
};

init();
