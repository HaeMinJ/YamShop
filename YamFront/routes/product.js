let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    let page = Number(req.query.page) || 1;
    let categorySeq = Number(req.query.categorySeq) || 1;
    let result = await fetch('https://api.bomandyam.shop:3000/product?page='+page+'&size=15&categorySeq='+categorySeq)
    let products = await result.json()
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    let currentCategoryInfo = await fetch('https://api.bomandyam.shop:3000/category/'+categorySeq)
    categories = await categories.json()
    currentCategoryInfo = await currentCategoryInfo.json()
    res.render('pages/product-list', { products: products, categories: categories, categoryInfo: currentCategoryInfo });
});

/* GET home page. */
router.get('/:prodSeq', async function(req, res, next) {
    let prodSeq = req.params.prodSeq;
    let result = await fetch('https://api.bomandyam.shop:3000/product/'+prodSeq)
    let product = await result.json()
    console.log(product);
    res.render('pages/product-info', { product: product });
});

module.exports = router;
