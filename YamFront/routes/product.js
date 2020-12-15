let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/product-list', { title: 'Express' });
});

/* GET home page. */
router.get('/:prodSeq', function(req, res, next) {
    res.render('pages/product-info', { title: 'Express' });
});

module.exports = router;
