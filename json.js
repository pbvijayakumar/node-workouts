const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Vijayakumar'
user.age = 30

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)