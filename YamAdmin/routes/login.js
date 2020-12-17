let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    res.render('pages/login', { title: 'Login Page' });
});

router.post('/', async function(req, res){
    let id = req.body.user_id;
    let password = req.body.user_pw;

    console.log(id);
    console.log(password)

    let response = await fetch('https://api.bomandyam.shop:3000/user/signin',{
        method:'POST',
        headers:{
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            email : id,
            pw : password
        })
    })

    response = await response.json()
    console.log(response)
    if(response.accessToken && response.typeSeq === 1){
        console.log('로그인 되었습니다.');
        res.cookie('accessToken', response.accessToken)
        res.redirect('/')
    }else{
        console.log('아이디 혹은 비밀번호가 일치하지 않습니다.');
        res.redirect('/login')
    }
})

module.exports = router;
