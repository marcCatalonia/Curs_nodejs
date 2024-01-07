//Import the necessary modules for the server
const http = require('http'); //With just the name it will import the module


//Create a new server
//Arrow functin with two params request and response
const server = http.createServer((req, res) =>{
    //console.log(req);
    //console.log(req.url, req.method, req.headers);

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Nodejs first web</title></head>');
    res.write('<body><h1>My first web with nodejs Server!</h1></body>');
    res.write('</html>');
    res.end();
});

//Make the server listen to calls trough port 3000
server.listen(3000);