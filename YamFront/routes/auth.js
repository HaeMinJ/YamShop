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

module.exports = router;
