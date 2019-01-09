console.log('Hello World!') 

function greetings(greetmessage){
    console.log(greetmessage)
}

greetings("Greetings from my Function")

const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;

fs.readFile('message.html',(err, html)=>{
    if(err){
        throw err;
    }

    const server =http.createServer((req, res)=>{
        res.statusCode=200;
        res.setHeader('content-type','text/html');
        res.write(html);
        // res.end('Hello World'); this works setHeader with plain text
        res.end();
    });
    
    server.listen(port, hostname, ()=>{
        console.log('Server started on port ' + port);
    });




});

