let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    let result = await fetch('https://api.bomandyam.shop:3000/product?page=0&size=30')
    let products = await result.json()
    console.log(products)
    res.render('bomspick', { products: products });
});

module.exports = router;
