const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

router.get('/', (req, res, next) => {
    //res.send('<h1>hello from express</h1>');
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;