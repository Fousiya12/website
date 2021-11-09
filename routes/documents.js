const express = require('express');
const router= express.Router();
const document = require('../models/document');
const Document = require('../models/document');

 // getting all documents
 
 router.get('/', async(req,res) =>{
      try{ const documents = await Document.find();
         res.json(documents);
        }
        catch (err){ res.json({message:err}); 
    }
});

// getting a document by id

router.get('/:documentid', async(req,res) =>{
     try{ const document = await Document.findById(req.params.documentid); res.json(document); 
    }
    catch(err){ res.json({message:err}); 
} 
});

//http route methods

//create a document
router.post('/',(req,res)=>{
    const document=new Document({
        name:{firstname:req.body.name.firstname,lastname:req.body.name.lastname},
        mobilenumber:req.body.mobilenumber,
        emailid:req.body.emailid,
        bookedevent:req.body.bookedevent,
        location:{zipcode:req.body.location.zipcode,
                cityname:req.body.location.cityname,
                statename:req.body.location.statename
            }
          });
    document.save().
    then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    })
});

// deleting a document

router.delete('/:documentid', async(req,res) =>{
     try{
          const removedocument = await Document.deleteOne({_id: req.params.documentid});
      res.json(removedocument); 
    }
    catch(err){
         res.json({message:err}); 
        } 
    }); 

// updating a document by id

router.patch('/:documentid', async(req,res) =>{
     try{ 
         const document = await Document.findOne({_id: req.params.documentid});
         if(req.body.name){
         if(req.body.name.firstname){
             document.name.firstname=req.body.name.firstname;
         }
         if(req.body.name.lastname){
            document.name.lastname=req.body.name.lastname;
        }}
        if(req.body.mobilenumber){
            document.mobilenumber=req.body.mobilenumber;
        }
        if(req.body.emailid){
            document.emailid=req.body.emailid;
        }
        if(req.body.bookedevent){
            document.bookedevent=req.body.bookedevent;
        }
        if(req.body.location){
            if(req.body.location.zipcode){
            document.location.zipcode=req.body.location.zipcode;
        }
        if(req.body.location.cityname){
            document.location.cityname=req.body.location.cityname;
        }
        if(req.body.location.statename){
            document.location.statename=req.body.location.statename;
        }
        await document.save();
        res.json(document);
    }} catch(err){ 
        res.json({message:err});
    }
});


module.exports=router;