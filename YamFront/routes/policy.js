let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/privacy', function(req, res, next) {
    res.render('pages/privacy-policy', { title: 'Express' });
});

module.exports = router;
