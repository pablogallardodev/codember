const encrypted = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101';
const words = encrypted.split(' ');
let message = '';

for (const word of words) {
  const codes = word.match(/1\d{2}|9\d{1}/g)
  message += String.fromCharCode(...codes) + " "
}

console.log(message);