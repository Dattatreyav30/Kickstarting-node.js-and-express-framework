const express = require('express');

const router = express.Router();

const fs = require('fs');

router.post('/', (req, res, next) => {
    console.log('login sucessfully');
    res.redirect('/login-success');  
})
router.get('/login-success', (req, res, next) => {
    const jsonData = fs.readFileSync('./backendProject/message.json')
    const messages = JSON.parse(jsonData); 
    let html = '';
    messages.forEach((message) => {
        html += `<div><strong>${message.userName}:</strong> ${message.message}</div>`;
    })
    res.send(`
    <h1>Messages:</h1>
        ${html}
        <hr>
    <form onsubmit="document.getElementById('userName').value = localStorage.getItem('username')"  action="/message-sent" method="post">
    <label for = "message">Type message:</label>
    <input type="text" name="message" id="message">
    <input type="hidden" name="userName" id="userName">
    <button type="submit">send</button>
</form>`)

})

module.exports = router