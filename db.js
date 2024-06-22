const mongoose = require("mongoose")
require('dotenv').config()

// Define URL
// const mongoURL = "mongodb://localhost:27017/hotels"
const mongoURL =process.env.MONGO_URL

// Establish Connection
mongoose.connect(mongoURL)

// get default connection
const db = mongoose.connection;

// event listeners
db.on('connected',()=>{
    console.log("Connection estblished with MongoDB")
})

db.on('error',()=>{
    console.log("Connection estblished with MongoDB")
})

db.on('disconnected',()=>{
    console.log("Connection estblished with MongoDB")
})

module.exports = db;