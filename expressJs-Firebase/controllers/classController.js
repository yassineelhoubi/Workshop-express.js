const firebase = require('../config/db');
const firestore = firebase.firestore();
const Class = require('../models/Class');

const addClass = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('class').add(data);
        res.status(201).json({
            message: "class added succesfuly",
            error: false
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}
const getClass = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await firestore.collection('class').doc(id).get();
        if (!data.exists) {
            res.status(404).json({
                message: "class with given ID not found",
                error: false
            })
        } else {
            res.status(200).json({
                message: "Class information",
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

const getAllClasses = async (req, res, next) => {
    try {
        const data = await firestore.collection('class').get();
        const classesArray = [];
        if (data.empty) {
            res.status(404).json({
                message: "no classe record found",
                error: false
            })
        } else {
            data.forEach(doc => {
                const classObj = new Class (
                    doc.id,
                    doc.data().name
                );
                classesArray.push(classObj);
                
            });
            res.status(200).json({
                message: "Classes information",
                data : classesArray,
                error:false
            })
        }

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true
        })
    }
}

const updateClass = async (req, res, next) => {
    try {
        const id = req.params.id;
        newData = req.body;
        const data = await firestore.collection('class').doc(id).get();
        if (!data.exists) {
            res.status(404).json({
                message: "class with given ID not found",
                error: false
            })
        } else {
            await firestore.collection('class').doc(id).update(newData);
            const data = await firestore.collection('class').doc(id).get();
            res.status(200).json({
                message: "class information updated successfuly",
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

const deleteClass = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await firestore.collection('class').doc(id).get();
        if (!data.exists) {
            res.status(404).json({
                message: "Class with the given ID not found",
                error: false
            })
        } else {
            await firestore.collection('class').doc(id).delete();
            res.status(200).json({
                message: "Class deleted successfuly",
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
addClass,
getAllClasses,
getClass,
updateClass,
deleteClass
}