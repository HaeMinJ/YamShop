let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    let page = Number(req.query.page) || 1;
    let order = Number(req.query.order) || 1;
    let categorySeq = Number(req.query.categorySeq) || 1;
    let query = req.query.query || '';
    let products = await fetch('https://api.bomandyam.shop:3000/product?page='+page+'&size=15&categorySeq='+categorySeq+"&order="+order+"&query="+encodeURI(query))
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    let currentCategories = await fetch('https://api.bomandyam.shop:3000/category/'+categorySeq)
    products = await products.json()
    categories = await categories.json()
    currentCategories= await currentCategories.json()
    if(query === '')
        res.render('pages/product-list', { products, categories, currentCategories });
    else
        res.render('pages/product-list', { products, categories, currentCategories, query });
});

/* GET home page. */
router.get('/:prodSeq', async function(req, res, next) {
    let prodSeq = req.params.prodSeq;
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    let result = await fetch('https://api.bomandyam.shop:3000/product/'+prodSeq)
    let product = await result.json()
    categories = await categories.json()
    res.render('pages/product-info', { product: product, categories: categories  });
});

module.exports = router;
