const router = require('express').Router();
const {addStudent , getAllStudents , getStudent , updateStudent , deleteStudent} = require('../controllers/studentController');


router.post('/add' , addStudent);
router.get('/get' , getAllStudents);
router.get('/get/:id' , getStudent);
router.put('/update/:id' , updateStudent);
router.delete('/delete/:id' , deleteStudent);

module.exports = router
