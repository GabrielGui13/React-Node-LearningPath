const path = require('path')
const rootDir = require('../util/path')

const express = require('express');
const router = express.Router();

//in this approach, always set up most specific routes to the less specific one
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    //console.log('In another middleware!');
/*     res.send(
        '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    ); */
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
    console.log(req.body); //just by this is undefined, needs to parse the body using body-parser
    res.redirect("/");
});

module.exports = router;
