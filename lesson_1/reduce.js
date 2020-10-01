function myReduce(array, func, initial) {
  let firstIndex = 0;
  if (initial === undefined) {
    initial = array[0];
    firstIndex = 1;
  }
  let accumulator = initial;
  for (let i = firstIndex; i < array.length; i++) {
    accumulator = func(accumulator, array[i]);
  }

  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49