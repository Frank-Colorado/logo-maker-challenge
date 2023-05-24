// tinycolor2: https://www.npmjs.com/package/tinycolor2
// tinycolor2 is a package that allows us to convert colors to different formats and validate colors
const tinyColor = require("tinycolor2");

// This is a function called validateColor
// It has 1 parameter called value
const validateColor = (value) => {
  // The value is passed to the tinyColor function
  const color = tinyColor(value);
  // The color is validated using the isValid method
  if (color.isValid()) {
    // If the color is valid, return true
    return true;
  } else {
    // Otherwise, return an error message
    return "Please enter a valid color";
  }
};

questions = [
  // Prompt for text
  // 3 character limit
  {
    type: "input",
    name: "name",
    message: "What text do you want on your logo? (3 character limit)",
    validate: function (value) {
      if (value.length <= 3) {
        return true;
      }
      return "Please enter a name less than 3 characters";
    },
  },
  // Prompt for text color
  {
    type: "input",
    name: "textColor",
    message:
      "What color do you want your logo text to be? (color keyword or hex code)",
    validate: function (value) {
      return validateColor(value);
    },
  },
  // Prompt for shape
  {
    type: "list",
    name: "shape",
    message: "What shape do you want your logo to be?",
    choices: ["circle", "square", "triangle"],
  },
  // Prompt for shape color
  {
    type: "input",
    name: "shapeColor",
    message:
      "What color do you want your logo shape to be? (color keyword or hex code)",
    validate: function (value) {
      return validateColor(value);
    },
  },
];

module.exports = { validateColor, questions };
