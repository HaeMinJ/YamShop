let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/dog', async function(req, res, next) {

    let result = await fetch('https://api.bomandyam.shop:3000/product/dogbest')
    let products = await result.json()
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    res.render('pages/best', { products, categories});
});
/* GET home page. */
router.get('/cat', async function(req, res, next) {

    let result = await fetch('https://api.bomandyam.shop:3000/product/catbest')
    let products = await result.json()
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    res.render('pages/catbest', { products, categories});
});


module.exports = router;
