// require the validateColor function from the questions.js file
const { validateColor } = require("../libs/questions");

// A test the validateColor function
describe("validateColor", () => {
  // A test that checks if the validateColor function returns true for a valid color keyword or hexadecimal code
  test("should return true for a valid color keyword or hexadecimal code", () => {
    const result = validateColor("red");
    expect(result).toBe(true);
    const result2 = validateColor("#ff0000");
    expect(result2).toBe(true);
  });
  // A test that checks if the validateColor function returns an error message for an invalid color keyword or hexadecimal code
  test("should return an error message for an invalid color keyword or hexadecimal code", () => {
    const result = validateColor("invalid");
    expect(result).toBe("Please enter a valid color");
    const result2 = validateColor("#ff000");
    expect(result2).toBe("Please enter a valid color");
  });
});
