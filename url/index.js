 //https://www.google.com/search?q=javascript+url+module+example

 //https: is a protocol
 //www.google.com is a host
    //search is a path
    //q is a query  ? is where the query starts
    //javascript+url+module+example is a query string or parameter

//ws is a web socket use to create a real time communication between server and client

//https is a protocol s stands for secure it is used to create a secure connection between server and client it has ssh certificate

//url is a user friendly way to access the website it is a human readable address of a website is is a ip address of a website


const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
  // console.log("New request receive");
  // console.log(req);
  if(req.url == '/favicon.ico'){
    return res.end();
  }
  const log = `${Date.now()}: ${req.method} ${req.url} New req received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile('log.txt', log, (err, data) => {
    switch (myUrl.pathname) {
      case '/':
        res.end("Home Page");
        break;
      case '/about':
        const username = myUrl.query.myname;
        res.end("Hello " + username );
        break;
        case '/search':
            const search = myUrl.query.q;
            res.end("Here are your result for " +search);
            break;
        case '/signup':
            if(req.method === 'GET'){
              res.end("This is a signup page");
            }
            else if(req.method === 'POST'){
              //db.query
              res.end("Success");
            }
      default:
        res.end("404 page not found");
    }
  }); 
});

myServer.listen(8001, () => {

    console.log("Server started everything is correct! ");
});