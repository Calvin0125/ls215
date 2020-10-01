function myMap(array, func) {
  let result = [];
  array.forEach(elem => result.push(func(elem)));
  return result;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));