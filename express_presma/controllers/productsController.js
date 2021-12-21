const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getProducts = async (req, res, next) => {
    try {

        const products = await prisma.product.findMany({
            include: {category: true}
        })
        res.json(products)
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
        const products = await prisma.product.create({
            data: req.body,
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


module.exports = {
    getProducts,
    addProduct
}