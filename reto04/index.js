const initPassword = 11098
const passwords = []
let validPasswords = []

for (let i = initPassword; i <= 98123; i++) {
  passwords.push(i)
}

passwords.map(password => {
  let isValid = null;

  if (password.toString().match(/55/g) !== null) {
    let passwordArray = password.toString().split("")

    for (let i = 0; i < passwordArray.length; i++) {
      if (passwordArray[i] > passwordArray[i + 1]) {
        isValid = false
        break
      } else {
        isValid = true
      }
    }
  } else {
    isValid = false
  }
  isValid && validPasswords.push(password)
})

console.log(`submit ${validPasswords.length}-${validPasswords[55]}`);