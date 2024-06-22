const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef', 'waiter', 'manager'],
        reuired: true
    },
    mobile:{
        unique: true,
        type: String,
        required: true
    }
})

// create person model
const Person = mongoose.model("person", personSchema)

module.exports = Person