const fs = require('fs');


const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    //Home
    if(url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write("<head><title>Assigment 1</title></head>");
        res.write("<body>");
        res.write("<h1>Assigment 1: Add new user</h1>");
        res.write("<form action='/create-user' method='POST'> <input type='text' name='username'> <button type='submit'>Send!</button> </form>");
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    //Post New user
    if(url === '/create-user' && method === 'POST'){
        const buffer = [];
        
        //Recieve chunks
        req.on('data', (chunks)=>{
            buffer.push(chunks);
        });


        //Chunks in a Buffer
        req.on('end', ()=>{
            const parsedData = Buffer.concat(buffer).toString();

            const data = parsedData.split("=")[1];

            console.log(data);


            //Redirect to /users
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });

    }


    //Users
    if(url === '/users'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<header></header>');
        res.write('<body><h1>Users</h1> <ul><li>User 1</li> <li>User 2</li> <li>User 3</li> </ul> </body>');
        res.write('</body> </html>');
        return res.end();
    }


    //Can be send some text not found response

}

module.exports = requestHandler;