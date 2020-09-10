// we want a function that takes an array of ints and returns lowest number

// i'm going to look through the whole array and find lowest number and then I am going swap with the start of arr
export function lowestNumber(arr) {
  if (arr.length === 0) {
    return "no values";
  }

  let lowestValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowestValue) {
      // swap
      lowestValue = arr[i];
    }
  }
  return lowestValue;
}

export const firstSorted = (arr) => {};
export function highestNumber(arr) {
  console.log("called");
}

export default function demo(arr) {
  console.log("demo");
}
