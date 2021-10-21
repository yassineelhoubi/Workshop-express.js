const firebase = require('../config/db');
const firestore = firebase.firestore();



const addStudent = async (req , res , next)=>{
    try{
        const data = req.body;
        await firestore.collection('students').add(data);
        res.status(201).json({
            message : "student added",
            error : false
        })
    } catch(error){
        res.status(400).json({
            message : error.message,
            error : true
        })
    }
}

const getAllStudents = async (req, res, next) => {
    try{
        data = await firestore.collection('students').get();
        const studentsArray = [];
        if (data.empty) {
            res.status(404).json({
                message : "No student record found",
                error : false
            })
        }
    }catch (error) {
        res.status(400).json({
            message : error.message,
            error : true
        })
    }
}



module.exports = {
    addStudent
}