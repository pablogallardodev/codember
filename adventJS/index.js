// Reto #1
function wrapping(gifts) {
  return gifts.map(gift => {
    const papel = "*".repeat(gift.length + 2)
    return `${papel}\n*${gift}*\n${papel}`
  })
}

// Reto #2
function countHours(year, holidays) {
  return holidays.reduce((hours, holiday) => {
    let day = new Date(`${holiday}/${year}`).getDay()
    return hours + ((day > 0 && day < 6) ? 2 : 0)
  }, 0)
}

// Reto #3
function distributeGifts(packOfGifts, reindeers) {
  const pesoMax = reindeers.join("").length * 2
  const pesoCaja = packOfGifts.join("").length
  return (pesoMax / pesoCaja) >> 0
}

// RETO #4
function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => b.l - a.l)
    .slice(1).every((box, i) => {
      return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
    })
}

// Reto #5
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const allSum = giftsCities.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]) // todas las combinaciones
    .filter(e => e.length <= maxCities && e.length > 0) // las combinaciones que cumplan el numero de elementos
    .map(subArray => subArray.reduce((sum, element) => sum + element)) // suma de los elementos
    .filter(suma => suma <= maxGifts) // buscamos solo los que cumplan el limite
  return allSum.length === 0 ? 0 : Math.max(...allSum)
}

// Reto #6
function createCube(size) {
  let result = [];
  [...Array(size).keys()].map((i) => {
    result[i] = `${" ".repeat(size - i - 1)}/${"\\/".repeat(i)}${"\\_".repeat(size)}\\`;
    result[size + i] = `${" ".repeat(i)}${"\\/".repeat(size - i)}${"_/".repeat(size)}`;
  })
  return result.join('\n');
}

// Reto #7
function getGiftsToRefill(a1, a2, a3) {
  const uniqueArray = a1.filter((item, index) => a1.indexOf(item) === index)
    .concat(a2.filter((item, index) => a2.indexOf(item) === index))
    .concat(a3.filter((item, index) => a3.indexOf(item) === index))

  return uniqueArray.filter(item => uniqueArray.indexOf(item) === uniqueArray.lastIndexOf(item))
}

// Reto #8
function checkPart(part) {
  const characters = part.split('')
  return characters.some((_, i) => {
    const word = `${part.slice(0, i)}${part.slice(i + 1)}`
    return word === word.split('').reverse().join('')
  })
}

// Reto #9
function countTime(leds) {
  let time = 0

  while (leds.includes(0)) {
    time++
    leds = leds.map((led, i) => {
      if (i === 0 && leds[leds.length - 1] === 1) return 1
      else if (leds[i - 1] === 1) return 1
      return led
    })
  }

  return time * 7
}

// Reto #10
function checkJump(heights) {
  let maxIndex = heights.indexOf(Math.max(...heights))
  const heightsUp = heights.slice(0, maxIndex + 1)
  const isUp = heightsUp.slice(1).every((h, i) => h >= heightsUp[i])
  const heightsDown = heights.slice(maxIndex + 1)
  const isDown = heightsDown.slice(1).every((h, i) => h <= heightsDown[i])
  return isUp && isDown && maxIndex != 0 && heightsDown.length != 0
}

// Reto #11
function getCompleted(part, total) {
  const totalSeg = (hour) => {
    const [h, m, s] = hour.split(':')
    return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s)
  }

  const maximoComunDivisor = (a, b) => {
    let temporal;
    while (b != 0) {
      temporal = b;
      b = a % b;
      a = temporal
    }
    return a
  }

  const partToSeg = totalSeg(part)
  const totalToSeg = totalSeg(total)
  const maxDivisor = maximoComunDivisor(partToSeg, totalToSeg)

  return `${partToSeg / maxDivisor}/${totalToSeg / maxDivisor}`
}

//Reto #12
function selectSleigh(distance, sleighs) {
  const selection = sleighs.filter((s) => s.consumption * distance <= 20)
  return selection.length > 0 ? selection[selection.length - 1].name : null
}

// Reto #13
function getFilesToBackup(lastBackup, changes) {
  const newChanges = changes.filter(change => change[1] > lastBackup)
    .map(change => change[0])
  return [...new Set(newChanges)].sort((a, b) => a - b)
}

// Reto #14
function getOptimalPath(path) {
  const getRoad = (level, position) => {
    if (level === path.length) return 0

    const min = Math.min(
      getRoad(level + 1, position),
      getRoad(level + 1, position + 1)
    )

    return path[level][position] + min
  }

  const result = getRoad(0, 0)
  return result
}

// Reto #15
function decorateTree(base) {
  const dict = {
    "PP": "P",
    "BB": "B",
    "RR": "R",
    "BP": "R",
    "PB": "R",
    "BR": "P",
    "RB": "P",
    "PR": "B",
    "RP": "B"
  }

  base = base.split(" ")
  let list = new Array(base.length).fill(base)
  return list.reduce((total, x) =>
    total.concat(
      [new Array(total.at(-1).length - 1).fill("-").map((_, i) => {
        return dict[total.at(-1).slice(i, i + 2).join("")]
      })]
    ), [base]
  ).slice(0, base.length).map(x => x.join(" ")).reverse()
}

// Reto #16
function fixLetter(letter) {
  let correction = letter
    .replace(/([,.?!])([^,.?!])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .replace(/([,.?!]{2,})/g, $1 => $1[0])
    .replace(/([.?!])(\s)([A-z])/g,
      (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
    )
    .replace(/(santa claus)/gi, 'Santa Claus')
    .trim()
    .replace(/\s([,.?!])/g, '$1')
    .replace(/^([A-z])/g, $1 => $1.toUpperCase())
    .replace(/([^.?!])$/g, '$1.')

  return correction
}

// Reto #17
function carryGifts(gifts, maxWeight) {
  return gifts
    .filter(gift => gift.length <= maxWeight)
    .reduce(
      (acc, gift) =>
        acc.at(-1).replace(/\s/g, '').length + gift.length <= maxWeight
          ? [...acc.slice(0, acc.length - 1), `${acc.at(-1)} ${gift}`.trim()]
          : [...acc, gift],
      ['']
    )
    .filter((el) => el);
}

// Reto #18
function dryNumber(dry, numbers) {
  return [...new Array(numbers).keys()]
    .map(num => num + 1)
    .filter(num => `${num}`.includes(dry))
}

// Reto #19
function sortToys(toys, positions) {
  return [...positions]
    .sort((a, b) => a - b)
    .map(pos => toys[positions.indexOf(pos)])
}

// Reto #20
function howManyReindeers(reindeerTypes, gifts) {
  return gifts.map(gift => {
    let weight = gift.weight
    const country = gift.country

    const fReindeer = reindeerTypes.filter(r => r.weightCapacity < weight)
      .sort((a, b) => b.weightCapacity - a.weightCapacity)

    let totalSum = fReindeer.reduce((sum, r) => sum + r.weightCapacity, 0)
    const reindeers = fReindeer.map(r => {
      const num = Math.floor(weight / totalSum)
      weight -= num * r.weightCapacity
      totalSum -= r.weightCapacity
      return { type: r.type, num: num }
    })
    return { country, reindeers }
  })
}

// Reto #21
function printTable(gifts) {
  const giftWidth = Math.max(...gifts.map(gift => gift.name.length), 4)
  const quantityWidth = Math.max(...gifts.map(gift =>
    gift.quantity.toString().length), 8)
  const tableWidth = giftWidth + quantityWidth + 7
  let table = '';

  table += '+'.repeat(tableWidth) + "\n"
  table += `| Gift${' '.repeat(giftWidth - 4)} `
  table += `| Quantity${' '.repeat(quantityWidth - 8)} |\n`
  table += `| ${'-'.repeat(giftWidth)} | ${'-'.repeat(quantityWidth)} |\n`

  gifts.forEach(gift => {
    const sizeName = `${gift.name}`.length
    const sizeQuantity = `${gift.quantity}`.length
    table += `| ${gift.name}${' '.repeat(giftWidth - sizeName)} `
    table += `| ${gift.quantity}${' '.repeat(quantityWidth - sizeQuantity)} |\n`
  });

  table += '*'.repeat(tableWidth)

  return table
}

// Reto 22
function checkStepNumbers(systemNames, stepNumbers) {
  const stored = {}
  return systemNames.every((systemName, index) => {
    console.log(stored, stepNumbers[index]);
    if (typeof stored[systemName] !== undefined &&
      stored[systemName] >= stepNumbers[index])
      return false

    stored[systemName] = stepNumbers[index]
    return true
  })
}

// Reto 23
function executeCommands(commands) {
  let cpu = new Array(8).fill(0)

  let cmd = {
    MOV: (x) => {
      let mov = x.split(",")[0].split(" ")[1]
      cpu[x.at(-1)] = (cpu[+mov.at(-1)] * +mov.startsWith("V")) + ~~mov
    },
    ADD: (x) => {
      let v1 = x.split(",")[0].at(-1)
      let v2 = x.split(",")[1].at(-1)
      cpu[v1] = (cpu[v1] + cpu[v2]) % 256
    },
    INC: (x) => {
      cpu[x.at(-1)] = (cpu[x.at(-1)] + 1) % 256
    },
    DEC: (x) => {
      cpu[x.at(-1)] = (((cpu[x.at(-1)] - 1) % 256) + 256) % 256
    },
    JMP: (x) => {
      commands = commands
        .concat(
          commands.slice(x.split(" ").at(-1),
            (commands.indexOf(x) + 1) * !!cpu[0])
        )
    }
  }

  for (let i = 0; i < commands.length; i++) {
    cmd[commands[i].split(" ")[0]](commands[i])
  }

  return cpu
}

// Reto 24
function canExit(maze) {
  function fillPath(line) {
    return line
      .join("")
      .replace(/[S][\sE]/g, "SS")
      .replace(/[\sE][S]/g, "SS")
      .split("")
  }
  const x = maze[0].length
  const y = maze.length
  const area = x * y

  new Array(area).fill('').forEach(() => {
    maze.map((hor, i) => {
      maze[i] = fillPath(hor)
      maze[i] = maze[i]
        .map((_, j) => fillPath(maze.map(x => x[j]))[i])
    })
  })

  return !maze.flat(2).includes("E")
}