// import demo, { lowestNumber, highestNumber } from "../src/app";
import { lowestNumber, firstSorted } from "../src/app";

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
    expect(lowestNumber([24, 2, 100, 4, 45])).toEqual(2);
  });

  test("it returns the lowest when lowest is first", function () {
    expect(lowestNumber([])).toEqual("no values");
  });
});

describe("testing firstSorted", () => {
  test("first item in array is sorted", () => {
    expect(firstSorted([2, 3, 1, 5])).toEqual([1, 3, 2, 5]);
  });
});

// 2 are the same
// function name (parm1, param2){

// }

// const name = (param1,param2) =>{

// }

// // these are the same anonymous
// function(){}

// () => {}
