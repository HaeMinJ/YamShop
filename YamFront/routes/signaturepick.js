let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/bom', async function(req, res, next) {
    let result = await fetch('https://api.bomandyam.shop:3000/product/bomspick?page=0&size=20')
    let products = await result.json()
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    res.render('pages/bomspick', { products  , categories });
});
router.get('/yam', async function(req, res, next) {
    let result = await fetch('https://api.bomandyam.shop:3000/product/yamspick?page=0&size=20')
    let products = await result.json()
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    products = products || {};
    res.render('pages/yamspick', { products, categories });
});

module.exports = router;
