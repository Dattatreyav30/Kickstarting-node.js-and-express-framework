const path = require('path')

const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');
const { route } = require('./shop');

router.get('/add-product', (req, res, next) => {
    //res.send('<h1>hello from express</h1>');
    // res.send('<form action="/admin/add-product" method = "POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">add product</button></form>');

    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
})

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','form.html'))
})

router.post('/success',(req,res,next)=>{
    res.send('<h1>form submitted successfully</h1>')
})
module.exports = router;