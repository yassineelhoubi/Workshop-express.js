const router = require('express').Router();
const {addProduct, getProducts, getSingleProduct, deletProduct, updateProduct} = require('../controllers/productsController');

router.get('/get' , getProducts);
router.get('/get/:id',getSingleProduct);
router.post('/add', addProduct);
router.delete('/delete/:id', deletProduct);
router.patch('/update/:id',updateProduct);

module.exports = router
