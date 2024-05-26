const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
  // console.log("New request receive");
  // console.log(req);
  const log = `${Date.now()}: ${req.url}New req received\n`;
  fs.appendFile('log.txt', log, (err, data) => {
    switch (req.url) {
      case '/':
        res.end("Home Page");
        break;
      case '/about':
        res.end("Hello from about");
        break;
      default:
        res.end("404 page not found");
    }
  }); 
});

myServer.listen(8001, () => {

    console.log("Server started everything is correct! ");
});