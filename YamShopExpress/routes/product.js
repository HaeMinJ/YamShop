let express = require('express')
let router = express.Router()
const pool = require('../utils/pool')

/**
 * @api {get} /product Request Product List
 * @apiName GetProduct
 * @apiGroup Product
 * @apiParam {Number} categorySeq Optional categorySeq
 * @apiParam {Number} page Current page number
 * @apiParam {Number} size Page size
 *
 */

router.get('/', async (req, res, next) => {
    let { page, size, categorySeq } = req.query
    categorySeq = Number(categorySeq) || 1;
    size = Number(size) || 15;
    page = Number(page) || 1;
    const pnSize = 10;
    const skipSize = (page - 1) * size;
    try {
        let categoryData;
        if(categorySeq !== 1) {
            categoryData = await pool.query('SELECT PC2.* FROM ProdCategory AS PC JOIN ProdCategory AS PC2 where (PC.parentCategory = ? OR PC.categorySeq = ?) and (PC2.parentCategory = PC.categorySeq OR PC2.categorySeq = PC.categorySeq) GROUP BY  PC2.categorySeq ', [categorySeq, categorySeq]);
        }else{
            categoryData = await pool.query('SELECT * FROM ProdCategory', [categorySeq]);
        }
        let needCategories = [];
        for(category of categoryData[0]){
            needCategories.push(category.categorySeq);
        }
        const queryResult = await pool.query('SELECT count(*) as count FROM Product WHERE categorySeq IN (?)',[needCategories]);
        const totalCount = Number(queryResult[0][0].count);
        const pnTotal = Math.ceil(totalCount / size);
        const pnStart = ((Math.ceil(page / pnSize) - 1) * pnSize) + 1;
        let pnEnd = (pnStart + pnSize) - 1;
        const data = await pool.query('select * from Product order by prodSeq desc limit ?, ?', [skipSize, size])
        const result = {
            page,
            pnStart,
            pnEnd,
            pnTotal,
            contents: data[0]
        }
        return res.json(result)
    } catch (err) {
        console.log(err);
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