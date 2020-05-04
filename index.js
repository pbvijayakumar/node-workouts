console.log("hi");
const fs = require('fs');
const os = require('os');
const note = require('./note.js');
const notes = require('.\n3-07-02-express\notes-app\notes.js');

var age = note.getage(6, 4);

var user = os.userInfo();
console.log(user)
 fs.appendFile('message.txt', `username ${user.username} age is ${age}`, function (err, data) {
     fs.writeFile('writeMe.txt', data, function(){});
   });