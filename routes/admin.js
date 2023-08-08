const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // via body-parser we are able to access req.body
    console.log(req.body)
    
    res.redirect('/');
});

module.exports = router;