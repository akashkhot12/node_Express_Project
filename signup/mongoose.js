import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
 name:String,
 gender:String,
 mobile:Number
});

module.exports = blogSchema