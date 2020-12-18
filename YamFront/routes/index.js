let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let categories, catbests, dogbests;
  try {
    categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()

    dogbests = await fetch('https://api.bomandyam.shop:3000/product/dogbest')
    dogbests = await dogbests.json()

    catbests = await fetch('https://api.bomandyam.shop:3000/product/catbest')
    catbests = await catbests.json()
  }catch (e) {
    console.log(e);
  }
  console.log(catbests)
  res.render('index', {categories,dogbests, catbests});
});

module.exports = router;
