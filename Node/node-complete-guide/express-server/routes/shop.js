const path = require('path')
const rootDir = require('../util/path')

const express = require("express");
const router = express.Router();

// as we are using 'get' instead of 'use', express applies a exact path to '/'
router.get('/', (req, res, next) => {
    console.log('In the middleware!');
    //res.send('<h1>Hello from express!</h1>')
    res.sendFile(path.join(rootDir, 'views', 'shop.html')) //dont use / because path.join concatenate
});

module.exports = router;
