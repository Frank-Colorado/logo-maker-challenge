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
  },
];
