const fs = require('fs')

// fs.appendFileSync("./test.txt", 'Hey there');    //creating a new test.txt file and give the data hey there

// fs.cpSync("./test.txt", "./new.txt");   //copy the teest.txt file into new.txt
fs.unlinkSync("./test.txt");   //delete the test.txt file