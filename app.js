//Import the necessary modules for the server
const http = require('http'); //With just the name it will import the module

const fs = require('fs');




//Create a new server
//Arrow functin with two params request and response
const server = http.createServer((req, res) =>{
    //console.log(req);
    //console.log(req.url, req.method, req.headers);

    //Response to particular Get calls

    const url = req.url;
    const method = req.method;

    if(url === '/'){ // === means equally of type and value (string and /)
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); //the return is important to not show the lines outside these brackets 
    }


    //Make a redirection sing the statusCode and also de setHeader
    if(url === '/message' && method === 'POST'){
        const body = [];
        //Here we call the 'on' listener to receive all data. Data is received in chunks which will be saved in an array
        //So we receive all stream of chuncks of data inside this listener of data
        req.on('data', (chunck) =>{
            body.push(chunck);
            console.log(chunck);
        });

        //Will fire he end listener when the request has finished
        req.on('end', () =>{
            //Get all chuncks and packed togehter and converted to String
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync('message.txt', message);
            console.log(parsedBody);

        });
        
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    

    res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Nodejs first web</title></head>');
        res.write('<body><h1>My first web with nodejs Server!</h1></body>');
        res.write('</html>');
        res.end();
});

//Make the server listen to calls trough port 3000
server.listen(3000);