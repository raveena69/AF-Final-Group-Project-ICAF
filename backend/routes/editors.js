const router = require("express").Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

process.env.SECRET_KEY = 'secret';
let Editor = require("../models/Editor");

router.route("/register").post((req,res)=>{
    const today = new Date();
    const editorData = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        created:today
    }
    Editor.findOne({
        email:req.body.email
    })
    .then(editor=>{
        if(!editor){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                editorData.password = hash
                Editor.create(editorData)
                .then(editor=>{
                    res.json({status:editor.email+"Registered"})
                })
                .catch(err=>{
                    res.send("error"+err);
                })
            })
        }else{
            res.json({error:"User already registered"})
        }
    })
    .catch(err=>{
        res.send("error" + err);
    })
})

router.route("/login").post((req,res)=>{

    Editor.findOne({
        email:req.body.email
    })
    .then(editor=>{
        if(editor){
            if(bcrypt.compareSync(req.body.password,editor.password)){
                const payload ={
                    _id:editor._id,
                    firstName:editor.firstName,
                    lastName:editor.lastName,
                    email:editor.email,
                    username:editor.username
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.send(token)
            }else{
                res.json({error:"Editor does not exist in the system"})
            }
        }else{
            res.json({error:"Editor does not exist in the system"})
        }
    })
    .catch(err=>{
        res.send("error" + err);
    })
})

router.route("/profile").get((req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Editor.findOne({
        _id:decoded._id
    })
    .then(editor=>{
        if(editor){
            res.json(editor)
        }else{
            res.send("Editor does not exist");
        }
    })
    .catch(err=>{
        res.send("error" + err);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let editId = req.params.id;
    const {firstName,lastName,email,username,password} = req.body;

    const updateEditor = {
        firstName,
        lastName,
        email,
        username,
        password
    }
    const update = await Editor.findByIdAndUpdate(editId,updateEditor)
        .then(()=>{
            res.status(200).send({status:"Editor updated",user:update});
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Editor not updated",error:err.message});
        })
})

router.route("/delete/:id").delete(async (req,res)=>{
    let editId = req.params.id;

    await Editor.findByIdAndDelete(editId)
        .then(()=>{
            res.status(200).send({status:"Editor deleted"});
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Editor not deleted",error:err.message});
        })
})

router.route("/get/:id").get(async (req,res)=>{
    let editId = req.params.id;

    const edit = await Editor.findById(editId)
        .then(()=>{
            res.status(200).send({status:"Editor fetched",edit:edit});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with get editor details",error:err.message});
        })
})

module.exports = router;