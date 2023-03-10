//http -> launsch server and send req //https-launch ssl server //fs //poth //os  => core modules

// const http = require('http'); //impoert files in nodejs , using / look file locally, not usinh that will give core modules if it is there

// function requestlistener(request, response){

// }

// http.createServer(requestlistener); //takes requestlistener function as argument which executes for every incoming function

// http.createServer(function(req,res){

// })
// const server = http.createServer((req,res) =>{
//     console.log(req);
// });
// server.listen(3000); // listen the incoming requests

// const http = require('http');
// const server = http.createServer((req, res) => {
//     //console.log(req.url,req.method,req.headers);
//     //process.exit();  to exit from the event loop
//     if (req.url === '/home') {
//         res.setHeader('content-type', 'text/html')
//         res.write('<html>');
//         res.write('<head><title>this is my first server</title></head>');
//         res.write('<body><h1>welcome home</h1></body>')
//         res.end();
//     }
//     else if (req.url === '/about') {
//         res.setHeader('content-type', 'text/html')
//         res.write('<html>');
//         res.write('<head><title>this is my first server</title></head>');
//         res.write('<body><h1>welcome to about us page</h1></body>')
//         res.end();
//     }
//     else if (req.url === '/node') {
//         res.setHeader('content-type', 'text/html')
//         res.write('<html>');
//         res.write('<head><title></title></head>');
//         res.write('<body><h1>welcome to my node js project</h1></body>')
//         res.end();
//     }
// })


const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile('message.txt', 'utf-8', (err, data) => {
            if (err) {
                console.error(err);
                return err;
            }
            res.setHeader('Content-Type', 'text/html');
            res.write('<html><body>');
            res.write(`<p>${data}</p>`);
            res.write('<form action="/message" method="POST">');
            res.write('<input type="text" name="message"></input>');
            res.write('<button type="submit">Send</button>');
            res.write('</form></body></html>');

            return res.end();
        });
    }
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });  //writefilesync will block the code to execute until the file creates
        });
    }
})
server.listen(5000);