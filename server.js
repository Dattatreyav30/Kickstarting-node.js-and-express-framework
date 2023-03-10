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
const server  = http.createServer((req,res) =>{
    console.log('dattatreya')
})
server.listen(4000);