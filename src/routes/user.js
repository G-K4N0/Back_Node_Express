const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// Create user
router.post('/users',(req,res)=>{
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
})


//getAll Users
router.get('/users',(req,res)=>{
    
    userSchema.find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
})

//getUser
router.get('/users/:id',(req,res)=>{
    const{id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
})

//updateUser
router.put('/users/:id',(req,res)=>{
    const {id} = req.params;
    const {fullName, name, adress,phone, age} = req.body;
    userSchema
    .updateOne({_id:id},{ $set: {fullName,name,adress,phone,age } } )
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
})

//Delete user
router.delete('/users/:id',(req,res)=>{
    const{id} = req.params;
    userSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
})
module.exports = router;