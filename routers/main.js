const express = require('express')
const router = express.Router()
const {splitProducts} = require('../pages')

router.get('/', (req, res) =>{
    res.send('Welcome to the home page!')
})
router.get('/products', (req, res) => {
    const currentPage = parseInt(req.query.page) || 1
    const rowsPerPage = parseInt(req.query.rowsPerPage) || 5

    const result = splitProducts(currentPage, rowsPerPage)
    if (result.error) {
        return res.status(400).json({ error: result.error })
    }
    res.json({
        currentPage: result.currentPage,
        maxPage: result.maxPage,
        products: result.splitedProducts
    })
})
module.exports = router;
