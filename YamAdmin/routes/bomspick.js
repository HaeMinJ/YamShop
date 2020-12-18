let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    let page = Number(req.query.page) || 1;
    let order = Number(req.query.order) || 1;
    let query = req.query.query || '';
    let categorySeq = Number(req.query.categorySeq) || 1;

    let products = await fetch('https://api.bomandyam.shop:3000/product?page='+page+'&size=15&categorySeq='+categorySeq+'&order='+order+'&query='+encodeURI(query))
    products = await products.json()



    if(query === '')
        res.render('pages/bomspick', { products, query: '' });
    else
        res.render('pages/bomspick', { products, query });
});


router.post('/', async function (req, res, next) {
    let title = req.body.prod_title;
    let price = req.body.prod_price;
    let file = req.body.prod_file;
    let category = req.body.prod_cate;

    console.log(title)
    console.log(price)
    console.log(file)
    console.log(category)

    if (title===""){
        return console.log('상품제목을 입력해주세요.');
    } else if(price===""){
        return console.log('상품가격을 입력해주세요.');
    } else if(file ===""){
        return console.log('파일을 첨부해주세요.');
    } else if(category==="") {
        return console.log('카테고리를 선택해주세요.');
    } else{

            let response = await fetch('https://api.bomandyam.shop:3000/product',{
                method : 'POST',
                headers:{
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    name : title,
                    price : price,
                    imageURL : file,
                    categorySeq : category
                })
            })


            if(response.status===200){
                console.log('상품이 추가되었습니다.');
                res.redirect('/bomspick')
            }else{
                console.log('상품 추가에 실패하였습니다.');
                res.redirect('/bomspick')
            }

        }


})


module.exports = router;