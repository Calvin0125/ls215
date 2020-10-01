let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];


function capitalizeWords(string) {
  let words = string.split(' ');
  words = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return words.join(' ');
}
function processBands(data) {
  data.forEach(band => {
    band.name = capitalizeWords(band.name).replace('.', '');
    band.country = 'Canada';

  });
  return data;
}

console.log(processBands(bands));