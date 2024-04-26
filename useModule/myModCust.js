//createing a custom module 

const myFun = (a, b, c) => {
  console.log("Finding avg: ");
  return (a+b+c)/3;
};

module.exports = myFun;