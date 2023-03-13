const express = require('express');

const router = express.Router();

const fs = require('fs');

router.get('/login', (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('userName').value)" action="/" method="post">
    <label for="userName">username</label>
    <input type="text" name="userName" id="userName">
    <button type="submit">Login</button>
</form>`)
})

module.exports = router;