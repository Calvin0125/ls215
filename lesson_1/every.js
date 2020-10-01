function myEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myEvery(['a', 'a234', '1abc'], isAString));