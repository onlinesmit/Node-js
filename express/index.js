const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello from home');
});
app.get('/about', (req, res) => {
    return res.send('Hello from about' +' Heyy '+ req.query.name + ' ' + req.query.age);
});

app.listen(8001, () => console.log("Everything is right"));
// const myServer = http.createServer(app);

// myServer.listen(8001, () => console.log("Everything is right"));