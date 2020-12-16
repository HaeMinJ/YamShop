let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let categories = await fetch('https://api.bomandyam.shop:3000/category')
  categories = await categories.json()
  res.render('index', { categories: categories});
});

module.exports = router;
