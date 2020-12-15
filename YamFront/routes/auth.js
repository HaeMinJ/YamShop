let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res, next) {
    res.render('pages/signup', { title: 'Express' });
});

/* GET home page. */
router.get('/signin', function(req, res, next) {
    res.render('pages/signin', { title: 'Express' });
});

module.exports = router;
