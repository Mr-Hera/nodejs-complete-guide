const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

// router allows to define routes in separate files and import them in app entry point
router.get('/', (req, res, next) => {
    // console.log('shop.js ~', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'shop', path: '/'});
})

module.exports = router;