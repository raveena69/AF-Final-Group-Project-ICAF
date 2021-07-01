const router = require("express").Router();
let Conference = require("../models/Conference");

router.route("/add").post((req,res)=>{
    const guestSpeaker = req.body.guestSpeaker;
    const time = req.body.time;
    const description = req.body.description;
    const date = req.body.date;

    const newCon = new Conference({
        guestSpeaker,
        time,
        description,
        date
    })
    newCon.save().then(()=>{
        res.json("Conference details added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get(function(req,res){
    Conference.find(function(err,conference){
        if(err){
            console.log(err);
        }
        else{
            res.json(conference);
        }
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let conId = req.params.id;
    const {guestSpeaker,time,description,date} = req.body;

    const updateConf = {
        guestSpeaker,
        time,
        description,
        date
    }
    const update = await Conference.findByIdAndUpdate(conId,updateConf)
        .then(()=>{
            res.status(200).send({status:"Conference details updated",user:update});
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Conference details not updated",error:err.message});
        })
})

router.route("/delete/:id").delete(async (req,res)=>{
    let conId = req.params.id;

    await Conference.findByIdAndDelete(conId)
        .then(()=>{
            res.status(200).send({status:"Conference details deleted"});
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Conference details not deleted",error:err.message});
        })
})

router.route("/get/:id").get(async (req,res)=>{
    let conId = req.params.id;

    const conf = await Editor.findById(conId)
        .then(()=>{
            res.status(200).send({status:"Conference details fetched",conf:conf});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error with get conference details",error:err.message});
        })
})

module.exports = router;