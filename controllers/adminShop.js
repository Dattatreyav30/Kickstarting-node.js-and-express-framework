const path = require('path');
const rootDir = require('../helpers/path');

exports.getAddproduct = (req, res, next) => {
    //res.send('<h1>hello from express</h1>');
    // res.send('<form action="/admin/add-product" method = "POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">add product</button></form>');

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.getPostProduct =  (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop'); 
}

exports.getShop = (req, res, next) => {
    //res.send('<h1>hello from express</h1>');
    res.sendFile(path.join(rootDir,'views','shop.html'));
}