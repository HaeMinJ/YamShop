let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/signup', async function(req, res, next) {
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    res.render('pages/signup', { title: 'Express' , categories});
});

/* GET home page. */
router.get('/signin', async function(req, res, next) {
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    res.render('pages/signin', { title: 'Express', categories });
});

module.exports = router;
