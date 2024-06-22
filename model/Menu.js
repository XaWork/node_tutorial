const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    name:{
        type: String,
        require:true,
        unique:true
    },
    price:{
        type:Number,
        require:true
    }, 
    taste:{
        type:String,
        require:true,
        enum:['spicy','sweet']
    },
    ingredients:{
        type:[String],
        require:true
    }
})

// create model
const Menu = mongoose.model("menu", menuSchema)

module.exports = Menu