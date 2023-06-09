// require the shape classes from the shapes.js file
const { Circle, Square, Triangle } = require("../libs/shapes");

describe("Shape classes", () => {
  // A test for the Circle class
  describe("Circle", () => {
    // A test for the render method
    test("should return an SVG string for a circle", () => {
      const circle = new Circle("test", "red", "blue");
      const result = circle.render();
      expect(result).toContain(
        '<circle cx="150" cy="100" r="100" fill="blue"/>'
      );
      expect(result).toContain(
        '<text x="50%" y="55%" font-size="65" dominant-baseline="middle" text-anchor="middle" fill="red">test</text>'
      );
    });
  });

  // A test for the Square class
  describe("Square", () => {
    // A test for the render method
    test("should return an svg string for a square", () => {
      const square = new Square("test", "red", "blue");
      const result = square.render();

      expect(result).toContain('<rect width="300" height="200" fill="blue"/>');
      expect(result).toContain(
        '<text x="50%" y="55%" font-size="75" dominant-baseline="middle" text-anchor="middle" fill="red">test</text>'
      );
    });
  });

  // A test for the Triangle class
  describe("Triangle", () => {
    // A test for the render method
    test("should return an svg string for a triangle", () => {
      const triangle = new Triangle("test", "red", "blue");
      const result = triangle.render();
      expect(triangle.render()).toContain(
        '<polygon points="150,20 30,180 270,180" fill="blue"/>'
      );
      expect(result).toContain(
        '<text x="50%" y="65%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="red">test</text>'
      );
    });
  });
});
