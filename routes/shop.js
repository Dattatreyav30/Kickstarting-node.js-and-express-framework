const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

const productControllers = require('../controllers/adminShop')

router.get('/', productControllers.getShop);

module.exports = router;