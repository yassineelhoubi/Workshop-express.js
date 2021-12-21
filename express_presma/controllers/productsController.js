const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getProducts = async (req, res, next) => {
    try {
        const data = req.body;
        const products = await prisma.product.findMany({
            include: {category: true}
        })
        res.json(products)
        console.log("test")
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}
const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const products = await prisma.product.findMany({})
        res.json(products)
        console.log("test")
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}


module.exports = {
    getProducts,
    addProduct
}