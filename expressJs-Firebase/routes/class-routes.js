const router = require('express').Router();
const {addClass, deleteClass, updateClass, getAllClasses, getClass} = require('../controllers/classController')

router.post('/add', addClass);
router.get('/get', getAllClasses);
router.get('/get/:id', getClass);
router.put('/update/:id', updateClass);
router.delete('/delete/:id', deleteClass);

module.exports = router;