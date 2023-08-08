const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// router allows to define routes in separate files and import them in app entry point
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router;