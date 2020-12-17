let express = require('express')
let router = express.Router()
const pool = require('../utils/pool')

/**
 * @api {get} /banner Request Banner information
 * @apiName GetBannerList
 * @apiGroup Banner
 *
 *
 * @apiUse BoardList
 */

router.get('/', async (req, res, next) => {
    try {
        const data = await pool.query('select * from Banner ' )
        return res.json(data[0])
    } catch (err) {
        return res.status(500).json(err)
    }
})

/**
 * @api {post} /banner Add banner
 * @apiName Post Banner
 * @apiGroup Banner
 *
 */

router.post('/', async (req, res, next) => {
    const { name, imageUrl, uploadTime } = req.body
    try {
        const data = await pool.query('insert into Board set ?',[{boardName : boardName, readLevel : readLevel, writeLevel : writeLevel}] )
        return res.json(data[0])
    } catch (err) {
        return res.status(500).json(err)
    }
})

/**
 * @api {patch} /board/:boardSeq Modify board
 * @apiName Modify board
 * @apiGroup Board
 *
 * @apiUse Board
 */

router.patch('/:boardSeq', async (req, res, next) => {
    const { boardSeq } = req.params
    const { boardName, readLevel, writeLevel } = req.body
    try {
        const data = await pool.query('update Board set boardName = ?, readLevel = ?, writeLevel = ? where boardSeq = ?', [boardName, readLevel, writeLevel, boardSeq])
        return res.json(data[0])
    } catch (err) {
        return res.status(500).json(err)
    }
})

/**
 * @api {delete} /board/:boardSeq Delete board
 * @apiName Delete board
 * @apiGroup Board
 *
 * @apiUse Board
 */

router.delete('/:boardSeq', async (req, res, next) => {
    const { boardSeq } = req.params
    try {
        const data = await pool.query('delete from Board where boardSeq = ?', [boardSeq])
        return res.json(data[0])
    } catch (err) {
        return res.status(500).json(err)
    }
})


/**
 * @api {get} /board/:boardSeq Request Board information
 * @apiName GetBoard
 * @apiGroup Board
 *
 * @apiParam {Number} boardSeq Board's unique Seq.
 *
 * @apiUse Board
 */

router.get('/:boardSeq', async (req, res, next) => {
    const { boardSeq } = req.params
    try {
        const data = await pool.query('select * from Board where boardSeq = ?', [boardSeq])
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