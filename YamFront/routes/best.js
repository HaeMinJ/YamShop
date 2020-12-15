let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    let result = await fetch('https://api.bomandyam.shop:3000/product?page=0&size=20')
    let products = await result.json()
    res.render('pages/best', { products: products});
});

module.exports = router;
