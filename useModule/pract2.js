//http create server

const http = require("http")

 http.createServer((req, resp) => {
 // const server = http.createServer((req, resp) => {
  
  resp.writeHead(200, {'content-type':'text/html'});
  resp.write("<h1> Wao this is responce from server </h1>");
  resp.write("<h2> Ok nice work dear. </h2>");
  resp.write('<button> click me </button>');
  resp.end('Ok');

})
.listen(9595);
//server.listen(9898);  //2nd method
