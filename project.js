const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {

  const path = req.url
  if(path =='/about'){
    console.log("about page");
  }
  else if(path == '/'){
    console.log("Home page");

    res.writeHead(200, {
      'content-type':'text/html'
    })

    const fileContent = fs.readFileSync("./vs/home.html");

    res.write(fileContent);
    res.end();
  }
  else if(path == '/services'){
    console.log("Service page");
  }
}).listen(8082);