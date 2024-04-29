const fs = require('fs')

// fs.appendFileSync("./test.txt", 'Hey there');    //creating a new test.txt file and give the data hey there

// fs.cpSync("./test.txt", "./new.txt");   //copy the teest.txt file into new.txt
// fs.unlinkSync("./test.txt");   //delete the test.txt file

//Sync  ... Blocking request
// fs.writeFileSync("./test.txt", "Hey there!");

//ASync   ... non-blocking request
// fs.writeFile("./test.txt", "Hello World Async", (err) => {
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Saved");
//   }
// });

//Sync   ..blocking

// const result = fs.readFileSync("./test.txt");
// console.log(result.toString());  //convert into string

//console.log("1");
// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result); //if encode with utf-8 then not need to convert in string
// console.log("2");   //output will be 1  hey there! 2

//Async ...non blocking
console.log("1");
fs.readFile("./test.txt", "utf-8", (err, res) => {

  console.log(res);
});

console.log("2");     //out will be 1  2  hey there!