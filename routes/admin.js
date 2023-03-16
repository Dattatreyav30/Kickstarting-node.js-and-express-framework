const path = require('path')

const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

// controllers
const productControllers = require('../controllers/adminShop')
//.........................   


router.get('/add-product', productControllers.getAddproduct);

router.post('/add-product', productControllers.getPostProduct)


module.exports = router;