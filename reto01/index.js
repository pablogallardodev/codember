const fs = require('fs')
const keysSuccess = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
const file = fs.readFileSync('./reto01/users.txt', 'utf-8')
  .split('\n')
  .map(line => line.replace('\r', ''));

file[file.length - 1].length !== 0 && file.push('') // to detect last user

let validUsers = [];
let actualUser = {};
let finalValidUser = {};

const isValidate = (user) => {
  const userKey = Object.keys(user);
  return keysSuccess.filter(key => !userKey.includes(key)).length === 0;
}

for (const line of file) {
  if (line.length === 0) {

    if (isValidate(actualUser)) {
      validUsers.push(actualUser)
      finalValidUser = actualUser;
    }
    actualUser = {};
  } else {
    let lineData = line.split(' ');
    for (const data of lineData) {
      const [key, value] = data.split(':', 2);
      actualUser[key] = value;
    }
  }
}

console.log('Usuarios validos: ', validUsers.length);
console.log('Último usuario valido', finalValidUser);