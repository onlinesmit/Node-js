//performing read and write operation

const fs = require('fs');

//readfile  writefile   appendfile   delete file

// // 1st mathod   ansyncronync
// fs.readFile("./abc.txt", (error, data) => {

//   if(error){
//     console.log("error");
//     console.log(error);
//   }else{
//     // console.log(data);  //output oin the form of buffer
//     console.log(data.toString());  //change into string    output in the form of String
//   }
// });


// console.log("Terminated: ");   //first print this line because run asyncronyns its execute first that line whose takes less time


// //2nd method   syncronysn
// const data = fs.readFileSync("./abc.txt", (error, data) => {

//   if(error){
//     console.log("error", error);
//    }else{
//     // console.log(data);  //output oin the form of buffer
//     console.log(data.toString());  //change into string    output in the form of String
//   }
// });


// console.log("Terminated: ");   //after executing above line then jump to tghis line and 2nd time print this line because run syncronyns its execute first that line whose asign work first in syncronync

//writeFile

let content = "Wao this the dynamic content: "
fs.writeFile("new_file.txt", content, (err) => {
  if(err){
    console.log(err);
  }
  else{
    console.log("Saved: ");
  }
});