// we want a function that takes an array of ints and returns lowest number
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
export function highestNumber(arr) {
  console.log("called");
}

export default function demo(arr) {
  console.log("demo");
}
