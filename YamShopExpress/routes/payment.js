let express = require('express')
let router = express.Router()
const pool = require('../utils/pool')

/**
 * @api {get} /payment 결제내역 요청
 * @apiName GetPaymentList
 * @apiGroup Payment
 *
 * @apiHeader {String} x-access-token 사용자 접근 액세스 토큰
 * @apiUse PaymentList
 */

router.get('/', async (req, res, next) => {
    const { userInfo } = req;
    if(userInfo) {
        try {
            const data = await pool.query('select * from Payment where userSeq = ?', [userInfo.userSeq])
            return res.json(data[0])
        } catch (err) {
            return res.status(500).json(err)
        }
    }else{
        return res.status(403).json({"message" : "Token Expired!"});
    }
})


/**
 * @api {post} /payment 결제 요청하기
 * @apiName Request Purchase Product
 * @apiGroup Payment
 *
 * @apiHeader {String} x-access-token 사용자 접근 액세스 토큰
 * @apiParam {Number} prodSeq 상품 번호
 * @apiParam {Number} quantity 수량
 * @apiParam {Number} price 상품 가격
 * @apiParam {Number} deliveryFee 배달비
 * @apiParam {Number} priceSum 총 가격
 */

router.post('/', async (req, res, next) => {
    const { userInfo } = req;
    const { prodSeq, quantity, price, deliveryFee, priceSum } = req.body;
    if(userInfo){
        try{
            const result = await pool.query('insert into Payment (prodSeq, deliveryState, userSeq, quantity, price, deliveryFee, priceSum) VALUES (?,?,?,?,?,?,?)', [prodSeq,0,userInfo.userSeq, quantity, price,deliveryFee,priceSum])
            res.status(200).send(result[0])
        }catch (e) {
            console.log(e);
            res.status(500).json({"message" : "Internal Server Error!"})
        }
    }else{
        return res.status(403).json({"message" : "Token Expired!"});
    }
})

/**
 * @api {post} /payment/purchase 결제 하기
 * @apiName Purchase Product
 * @apiGroup Payment
 *
 * @apiHeader {String} x-access-token 사용자 접근 액세스 토큰
 * @apiParam {Number} prodSeq 상품 번호
 * @apiParam {String} purchaseInfo 거래 정보
 * @apiParam {Number} paymentSeq 거래 번호
 */

router.post('/', async (req, res, next) => {
    const { userInfo } = req;
    const { paymentSeq, purchaseInfo } = req.body;
    if(userInfo){
        try{
            let smtpTransport = nodemailer.createTransport({
                service : 'SendGrid',
                auth: {
                    user: 'apikey',
                    pass: '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'
                }
            });
            let mailOptions = {
                to: email,
                from: 'payment@bomandyam.shop',
                subject: '['+paymentSeq+'] 봄이와 얌 결제 영수증입니다.',
                text: '구매 해주셔서 감사합니다. 상품이 배송되기 까지는 택배사 사정에 따라 3~5일 가량 소요됩니다. ' +
                    '상품 교환 및 환불 관련 문의 사항이 있다면 아래의 번호로 연락주시기 바랍니다.' +
                    'H.P : 010-9881-0664 ' +
                    '' +
                    '봄이와 얌 쇼핑몰 : https://www.bomandyam.shop/' +
                    '결제 시간 : ' + new Date()
            }
            smtpTransport.sendMail(mailOptions, function (errorMessage){})
            const result = await pool.query('update Payment set payState = 1, purchaseInfo= ?, purchaseTime = ? WHERE paymentSeq = ?', [purchaseInfo, Date.now(), paymentSeq])
            res.status(200).send(result[0])
        }catch (e) {
            console.log(e);
            res.status(500).json({"message" : "Internal Server Error!"})
        }
    }else{
        return res.status(403).json({"message" : "Token Expired!"});
    }
})


/**
 * @apiDefine PaymentList
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *     {
 *       "paymentSeq" : 1,
 *       "prodSeq" : 1,
 *       "deliveryState": 0,
 *       "userSeq" : 1
 *     },
 *     {
 *       "paymentSeq" : 1,
 *       "prodSeq" : 1,
 *       "deliveryState": 0,
 *       "userSeq" : 1
 *     }
 *     ]
 */
module.exports = router