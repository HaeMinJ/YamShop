let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/signup', async function(req, res, next) {
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    res.render('pages/signup', { title: 'Express' , categories});
});

router.post('/signup', async function(req, res){
    let {email, pw, name, phone, address, gender, birthday} = req.body;
    gender = Number(gender) || 1;
    let register = await fetch('https://api.bomandyam.shop:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify({
            email,
            pw,
            name,
            phone,
            address,
            gender,
            birthday
        })
    })
    if(register.status === 200){
        register = await register.json()
        res.cookie('accessToken', register.accessToken)
        res.redirect('/auth/signin')
    }else{
        res.redirect('/auth/signup')
    }
})

/* GET home page. */
router.get('/signin', async function(req, res, next) {
    let categories = await fetch('https://api.bomandyam.shop:3000/category')
    categories = await categories.json()
    res.render('pages/signin', { title: 'Express', categories });
});

router.post('/signin', async function(req, res){
    let {email, pw} = req.body;
    let result = await fetch('https://api.bomandyam.shop:3000/user/signin', {
        method : 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({
            email,
            pw
        })
    })
    if(result.status === 200){
        result = await result.json()
        res.cookie('accessToken', result.accessToken)
        res.redirect('/')
    }else{
        res.redirect('/auth/signin')
    }
})

router.get('/request-reset', async(req, res) => {
    res.render('pages/request-reset')
})

router.get('/reset/:token', async function(req, res) {
    let token = req.params.token;
    res.render('pages/pw-reset', {token : token});
})
router.post('/reset/:token', async function (req, res) {
    let token = req.params.token;
    let pw = req.body.pw;
    let pwResult = await fetch('https://api.bomandyam.shop:3000/user/reset', {
        method : 'post',
        headers : {
            'x-access-token' : token,
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({
            pw : pw
        })
    })
    if(pwResult.status === 200){
        res.redirect('/auth/signin')
    }else{
        res.redirect('/auth/signup')
    }
})

module.exports = router;
