function octalToDecimal(numberString) {
  let digits = numberString.split('').reverse().map(digit => Number(digit));
  let decimal = 0;
  digits.forEach((digit, index) => {
    decimal += digit * 8**index;
  });
  return decimal;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9