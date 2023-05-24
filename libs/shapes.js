// A class called Shape is defined in this file. It is the base class for all shapes.
// It has a constructor that takes text, text color, shape color as parameters.
// It has a method called render that returns an svg string.
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

// A class called Circle that extends the Shape class.
class Circle extends Shape {
  render() {
    return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="50" cy="50" r="40" fill="${this.shapeColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
  }
}

// A class called Square that extends the Shape class.
class Square extends Shape {
  render() {
    return `
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>
          `;
  }
}

// A class called Triangle that extends the Shape class.
class Triangle extends Shape {
  render() {
    return `
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="50,10 10,90 90,90" fill="${this.shapeColor}"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
