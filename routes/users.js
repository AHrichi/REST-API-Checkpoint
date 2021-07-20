const express = require("express");
const router = express.Router();
const User = require("../models/User")
// router.get("/",(req,res)=>{
//     res.send("hello");
// });

//POST
router.post("/",async (req,res)=>{
    try{
        const newUser = new User({...req.body});
        if(!req.body.email){
            res.status(400).send({message:"email is required "});
            return;
        }
        const response = await newUser.save();
        res.send({response:response,message:"user is saved"});
    }catch(error){
        console.log(error)
        res.status(500).send({message:'can not save it'});
    }    
})

//GET ALL
router.get("/",async (req,res)=>{
    try{
    const result=await User.find()
    res.send({response:result,message:'getting users successfully'})
    }catch(error){
        res.status(400).send("can not get users")
    }
})


//GET ONE
router.get("/:id",async (req,res)=>{
    try{
    const result=await User.findOne({_id:req.params.id})
    res.send({response:result,message:'getting contact successfully'})
    }catch(error){
        res.status(400).send("no user with this id")
    }
})
//DELETE d
router.delete("/:id",async(req,res)=>{
    try{
        const result=await User.deleteOne({_id:req.params.id})
        result.n?res.send({response:'User delete'}):res.send({response:'there is no User with this id'})
        res.send('deleting User successfully')
    }catch(error){
        res.send("User not deleted")
    }
})
//UPDATE
router.put("/:id",async(req,res)=>{
    try{
        const result=await User.updateOne(
            {_id:req.params.id},
            {$set:{...req.body}}
            )
        result.nModified?res.send({message:'User Updated'}):res.send({message:'User already Updated'})
        res.send('Updating User successfully')
    }catch(error){
        res.send({message:"no User with this id!!"})
    }
})

module.exports=router;