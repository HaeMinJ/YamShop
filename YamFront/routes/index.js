let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let categories = await fetch('https://api.bomandyam.shop:3000/category?size=100&page=0')
  console.log(categories)
  res.render('index', { categories: categories[0] });
});

module.exports = router;
