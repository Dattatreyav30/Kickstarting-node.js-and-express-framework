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

const http = require('http');
const server = http.createServer((req, res) => {
    //console.log(req.url,req.method,req.headers);
    //process.exit();  to exit from the event loop
    if (req.url === '/home') {
        res.setHeader('content-type', 'text/html')
        res.write('<html>');
        res.write('<head><title>this is my first server</title></head>');
        res.write('<body><h1>welcome home</h1></body>')
        res.end();
    }
    else if (req.url === '/about') {
        res.setHeader('content-type', 'text/html')
        res.write('<html>');
        res.write('<head><title>this is my first server</title></head>');
        res.write('<body><h1>welcome to about us page</h1></body>')
        res.end();
    }
    else if (req.url === '/node') {
        res.setHeader('content-type', 'text/html')
        res.write('<html>');
        res.write('<head><title></title></head>');
        res.write('<body><h1>welcome to my node js project</h1></body>')
        res.end();
    }
})
server.listen(5000);