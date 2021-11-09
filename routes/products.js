const express = require("express")

const router = express.Router()


const {Product} = require("../models")

router.get("/", async (req,res) => {
    let products = await Product.collection().fetch()
    console.log("this is not json =>", products)
    console.log("this is json => ", products.toJSON())
    res.render('products/index', {
        'products': products.toJSON()
    })
})

module.exports = router