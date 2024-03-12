const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');


const storeCollections = new mongoose.Schema({
    cake_Name : {
        type:String,
        required:true
    },
    quantity : {
        type:Number,
        required:true
    },
    Ingredients : {
        type:String,
        required:true
    },
    price : {
        type:Number,
        required:true
    },
    made_by : {
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('storeDetails',storeCollections);