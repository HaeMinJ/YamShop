let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/bom', function(req, res, next) {
    res.render('pages/bomspick', { title: 'Express' });
});
router.get('/yam', function(req, res, next) {
    res.render('pages/yamspick', { title: 'Express' });
});

module.exports = router;
