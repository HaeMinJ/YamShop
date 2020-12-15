let express = require('express')
let router = express.Router()
const pool = require('../utils/pool')

/**
 * @api {get} /product Request Product List
 * @apiName GetProduct
 * @apiGroup Product
 *
 * @apiParam {Number} page Current page number
 * @apiParam {Number} size Page size
 *
 */

router.get('/', async (req, res, next) => {
    const { page, size } = req.query
    try {
        const data = await pool.query('select * from Product limit ?, ?', [Number(page), Number(size)])
        return res.json(data[0])
    } catch (err) {
        return res.status(500).json(err)
    }
})

/**
 * @api {get} /product/:prodSeq Request ProductInfo
 * @apiName GetProductInfo
 * @apiGroup Product
 *
 * @apiParam {Int} prodSeq
 *
 */

router.get('/:prodSeq', async (req, res, next) => {
    const { prodSeq } = req.params
    try {
        const data = await pool.query('select * from Product where prodSeq = ?', [Number(prodSeq)])
        return res.json(data[0][0])
    } catch (err) {
        return res.status(500).json(err)
    }
})

/**
 * @api {post} /product Add Product
 * @apiName Product Post For Crawler
 * @apiGroup Product
 *
 *
 */

router.post('/', async (req, res, next) => {
    const { name, price, imageUrl, categorySeq } = req.body
    try {
        const data = await pool.query('insert into Product set ?',[{name : name, price : price, imageUrl : imageUrl, quantity : 100, categorySeq : Number(categorySeq)}] )
        return res.json(data[0])
    } catch (err) {
        return res.status(500).json(err)
    }
})



/**
 * @apiDefine Board
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "boardSeq" : 0,
 *       "boardName" : "Product",
 *       "readLevel" : 0,
 *       "writeLevel" : 2
 *     }
 */


/**
 * @apiDefine BoardList
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *     {
 *       "boardSeq" : 0,
 *       "boardName" : "Product",
 *       "readLevel" : 0,
 *       "writeLevel" : 2
 *     },
 *     {
 *       "boardSeq" : 1,
 *       "boardName" : "Event",
 *       "readLevel" : 0,
 *       "writeLevel" : 2
 *     }
 *     ]
 */
module.exports = router