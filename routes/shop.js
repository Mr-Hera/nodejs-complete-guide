const express = require('express');
const path = require('path');

const productsController = require('../controllers/products');

const router = express.Router();

// router allows to define routes in separate files and import them in app entry point
router.get('/', productsController.getProducts)

module.exports = router;