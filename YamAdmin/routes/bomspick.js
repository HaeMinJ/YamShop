let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    let page = Number(req.query.page) || 1;
    let order = Number(req.query.order) || 1;
    let query = req.query.query || '';
    let categorySeq = Number(req.query.categorySeq) || 1;

    let products = await fetch('https://api.bomandyam.shop:3000/product?page='+page+'&size=15&categorySeq='+categorySeq+'&order='+order+'&query='+encodeURI(query))
    products = await products.json()


    console.log(products)

    if(query === '')
        res.render('pages/bomspick', { products, query: '' });
    else
        res.render('pages/bomspick', { products, query });
});

module.exports = router;