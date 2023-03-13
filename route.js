// const fs = require('fs');
// const requesHnadler = (req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
//         fs.readFile('message.txt', 'utf-8', (err, data) => {
//             if (err) {
//                 console.error(err);
//                 return err;
//             }
//             res.setHeader('Content-Type', 'text/html');
//             res.write('<html><body>');
//             res.write(`<p>${data}</p>`);
//             res.write('<form action="/message" method="POST">');
//             res.write('<input type="text" name="message"></input>');
//             res.write('<button type="submit">Send</button>');
//             res.write('</form></body></html>');
//             return res.end();
//         });
//     }
//     else if (url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });
//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString()
//             const message = parsedBody.split('=')[1];
//             fs.writeFile('message.txt', message, () => {
//                 res.statusCode = 302;
//                 res.setHeader('location', '/');
//                 return res.end();
//             });  //writefilesync will block the code to execute until the file creates
//         });
//     }
// }
//module.exports = requesHnadler


// express