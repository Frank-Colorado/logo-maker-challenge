// require the shape classes from the shapes.js file
const { Circle, Square, Triangle } = require("../libs/shapes");

// A test for the Circle class
describe("Circle", () => {
  // A test for the render method
  describe("render", () => {
    it("should return an svg string for a circle", () => {
      const circle = new Circle("test", "red", "blue");
      const result = circle.render();
      expect(result).toEqual(expect.any(String));
      expect(result)
        .toContain(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="50" cy="50" r="40" fill="blue"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red">test</text>
      </svg>`);
    });
  });
});
