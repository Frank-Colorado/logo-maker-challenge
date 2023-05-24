// A class called Shape is defined in this file. It is the base class for all shapes.
// It has a constructor that takes text, text color, shape color as parameters.
// It has a method called render that returns a string.
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    throw new Error("You have to implement the render method");
  }
}

// A class called Circle is defined in this file. It extends the Shape class.
