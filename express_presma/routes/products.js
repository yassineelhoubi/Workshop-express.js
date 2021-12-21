const router = require('express').Router();
const {addProduct , getProducts} = require('../controllers/productsController');

router.get('/get' , getProducts);
router.get('/get/:id',addProduct);
router.post('/add', addProduct);
router.delete('/delete/:id', addProduct);
router.patch('/update:id',addProduct);

module.exports = router
