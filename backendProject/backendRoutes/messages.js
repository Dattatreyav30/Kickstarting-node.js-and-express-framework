const express = require('express');

const router = express.Router();

const fs = require('fs');

router.post('/message-sent', (req, res, next) => {
    const userName = req.body.userName;
    const message = req.body.message;
    const data = { userName, message };

    // Read the existing data from the file
    const jsonData = fs.readFileSync('./backendProject/message.json');
    const messages = JSON.parse(jsonData);

    // Add the new message to the array
    messages.push(data);

    // Write the updated data back to the file
    fs.writeFileSync('./backendProject/message.json', JSON.stringify(messages));
    res.status(200);
    res.redirect('login-success') 
});

module.exports = router;