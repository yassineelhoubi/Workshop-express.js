const firebase = require('../config/db');
const firestore = firebase.firestore();
const Student = require('../models/student')

const addStudent = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('students').add(data);
        res.status(201).json({
            message: "student added",
            error: false
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}

const getAllStudents = async (req, res, next) => {
    try {
        data = await firestore.collection('students').get();
        const studentsArray = [];
        if (data.empty) {
            res.status(404).json({
                message: "No student record found",
                error: false
            })
        } else {
            data.forEach(doc => {
                console.log(doc)
                const student = new Student(
                    doc.id,
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().className,
                    doc.data().age,
                    doc.data().cin,

                );
                studentsArray.push(student);
            });
            res.status(200).json({
                message: "Students information",
                data: studentsArray,
                error: false
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}

const getStudent = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = await firestore.collection('students').doc(id).get();
        if (!data.exists) {
            res.status(404).json({
                message: "Student with the given ID not found",
                error: false
            })
        } else {
            res.status(200).json({
                message: "Student information",
                data: data.data(),
                error: false
            })
        }

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}

const updateStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const data = await firestore.collection('students').doc(id).get();
        if (!data.exists) {
            res.status(404).json({
                message: "Student with the given ID not found",
                error: false
            })
        } else {
            await firestore.collection('students').doc(id).update(newData);
            const data = await firestore.collection('students').doc(id).get();
            res.status(200).json({
                message: "Student information updated successfuly",
                data: data.data(),
                error: false
            })
        }

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}

const deleteStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await firestore.collection('students').doc(id).get();
        if (!data.exists) {
            res.status(404).json({
                message: "Student with the given ID not found",
                error: false
            })
        } else {
            await firestore.collection('students').doc(id).delete();
            res.status(200).json({
                message: "Student deleted successfuly",
                error: false
            })
        }


    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}



module.exports = {
    addStudent,
    getAllStudents,
    getStudent,
    updateStudent,
    deleteStudent
}