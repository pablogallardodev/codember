const fs = require('fs')
const mecenas = JSON.parse(fs.readFileSync('./reto05/mecenas.json', 'utf-8'))

let actualIndex = 0
let deadIndex = 0

const findNextValue = (to = -1) => mecenas.findIndex((mecena, index) => mecena !== null && index > to)

while (mecenas.filter(mecena => mecena !== null).length !== 1) {
  deadIndex = findNextValue(actualIndex)
  if (deadIndex === -1) deadIndex = findNextValue()
  //console.log(actualIndex, deadIndex);
  mecenas[deadIndex] = null
  actualIndex = findNextValue(deadIndex)
  if (actualIndex === -1) actualIndex = findNextValue()
}

const superviviente = findNextValue()
console.log(`submit ${mecenas[superviviente]}-${superviviente}`);