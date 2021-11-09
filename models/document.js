const mongoose = require('mongoose');

const documentschema = mongoose.Schema({
    name:{
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    }},
    mobilenumber:{
        type:String,
        require:true
    },
    emailid:{
        type:String,
        require:true
    },
    bookedevent:{
        type:String,
        require:true
    },
    location:{
            zipcode:{
                type:String,
                require:true
            },
            cityname:{
                type:String,
                require:true
            },
            statename :{
                type:String,
                require:true
            }
        }
    });

module.exports = mongoose.model('documents',documentschema);