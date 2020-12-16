let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    let result = await fetch('https://api.bomandyam.shop:3000/product?page=0&size=20')
    let products = await result.json()
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    res.render('pages/best', { products, categories});
});

module.exports = router;
