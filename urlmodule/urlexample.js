const http = require("http")  //its help to create a server

const url = require("url")   //its help to pass the url 

//url.parse()   its a function to pass a url

http.createServer((req, res) => {
  console.log(req.url);

  const urlOb = url.parse(req.url, true);
  console.log(urlOb);

  console.log(urlOb.query.keywords);
}).listen(8082);