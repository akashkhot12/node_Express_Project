const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewParser:true,
            useUnifiedTopology:true,
        });
        console.log("mongo db connected");
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
    process.exit(1);
    }
}

module.exports = connectDb;