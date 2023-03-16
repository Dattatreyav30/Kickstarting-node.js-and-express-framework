const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

const productControllers = require('../controllers/contact&404')

router.get('/contact', productControllers.contact)

router.post('/success',productControllers.contactSucess)

module.exports = router