let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/bomspick', async function(req, res, next) {
    let result = await fetch('https://api.bomandyam.shop:3000/product?page=1&size=15')
    let products = await result.json()
    console.log(products)
    res.render('pages/bomspick', { products: products });
});

module.exports = router;
