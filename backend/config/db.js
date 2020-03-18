const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://techlordd:%40Bollyjay007%23@cluster0-cijbt.mongodb.net/test?retryWrites=true&w=majority"
    , {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('MongoDB connected successfully')
        
    } catch (err) {
        console.error(err.message)
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;