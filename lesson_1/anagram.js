function isAnagram(word1, word2) {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function anagram(word, list) {
  let anagrams = [];
  list.forEach(possibleAnagram => {
    if (isAnagram(word, possibleAnagram)) {
      anagrams.push(possibleAnagram);
    }
  });

  return anagrams;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
