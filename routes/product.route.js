const express = require('express')
const router = express.Router()
const Product = require('../models/product.model')

// Get all PRODUCT
router.get('/', async (req, res) => {

    const page = req.query.page !== undefined && parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 1;
    const limit = req.query.limit !== undefined && parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 10;
    const skip = page * limit - limit;

    const products = await Product.find({}).skip(skip);
    const count = products.length;

    if (count > 0) {
        res.status(200).send({
            count,
            products
        })
    } else {
        res.send({
            message: 'No products found'
        })
    }
})

// Get one PRODUCT
router.get('/:prodId', async (req, res) => {

    const productId = req.params.prodId;
    let product;

    try {
        product = await Product.findOne({ '_id': productId });
    } catch (error) {
        console.log(error)
    }

    if (product)
        res.status(200).send(product)
    else
        res.send({
            message: 'No product found'
        })

})

// Get all PRODUCT by CATEGORY ID
router.get('/category/:catId', async (req, res) => {

    const page = req.query.page !== undefined && parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 1;
    const limit = req.query.limit !== undefined && parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 10;
    const skip = page * limit - limit;

    const categoryId = req.params.catId;
    const products = await Product.find({ 'cat_id': categoryId }).skip(skip);
    const count = products.length;

    if (count > 0) {
        res.status(200).send({
            count,
            products
        })
    } else {
        res.send({
            message: 'No products found'
        })
    }
})

module.exports = router;