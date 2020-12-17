var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    token = req.cookies['accessToken'];
    if(token){
        res.render('index', { title: 'Index Page' });
    }else{
        res.redirect('/login')
    }

});

module.exports = router;
