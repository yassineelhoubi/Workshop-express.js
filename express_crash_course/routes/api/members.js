const express = require('express')
const members = require('../../Members');
const router = express.Router();
const uuid = require('uuid')

//Gets All Members
router.get('/', (req, res) => {
    res.json(members);
})

//Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({
            msg: `No member with the id of ${req.params.id}`
        })
    }
})

// Create Member
router.post('/', (req, res) => {
    // res.send(req.body)
    const newMember = {
        id: uuid.v4(),
        name: req.body.name
    }
    if(!newMember.name){
       return res.status(400).json({msg:"Please include a name"})
    }
    members.push(newMember)
    res.json(members)
})

// Update Member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name ;
                res.json({msg: 'Member updated' , member})
            }
        })
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({
            msg: `No member with the id of ${req.params.id}`
        })
    }
})

//Delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json({
            msg : "Member deleted" ,
            members : members.filter(member => member.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({
            msg: `No member with the id of ${req.params.id}`
        })
    }
})


module.exports = router;