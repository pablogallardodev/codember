const fs = require('fs')
const colors = JSON.parse(fs.readFileSync('./reto03/colors.txt', 'utf-8'))

let maxCount = 1
let actualCount = 1
let lastColor = colors[0]

colors.map((_, index) => {
  if (colors[index] === colors[index + 1]) return actualCount = 1

  if (colors[index + 1] !== colors[index - 1]) return actualCount = 2

  actualCount++
  console.log(actualCount);
  if (actualCount >= maxCount) {
    maxCount = actualCount
    lastColor = colors[index - 1]
  }
})

console.log(`${maxCount}@${lastColor}`)