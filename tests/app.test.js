// import demo, { lowestNumber, highestNumber } from "../src/app";
import { lowestNumber } from "../src/app";

describe("test lowestNumber function", function () {
  test("it takes [1, 2, 3, 4, -1] and return -1 ", function () {
    expect(lowestNumber([1, 2, 3, 4, -1])).toEqual(-1);
  });

  test("it returns the lowest when lowest is last", function () {
    expect(lowestNumber([1, 2, 3, 4, -1])).toEqual(-1);
  });

  test("it returns the lowest when lowest is first", function () {
    expect(lowestNumber([-2, 2, 100, 4, -1])).toEqual(-2);
  });

  test("it returns the lowest when all numbers are positive", function () {
    expect(lowestNumber([24, 2, 100, 4, 45])).toEqual(-2);
  });

  test("it returns the lowest when lowest is first", function () {
    expect(lowestNumber([])).toEqual("no values");
  });
});
