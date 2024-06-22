const express = require('express')
const db = require('./db')
const app = express()

const bodyParse = require('body-parser')
app.use(bodyParse.json())
const Person = require('./model/Person')

require('dotenv').config();
const port = process.env.PORT || 3000

app.get("/", function(req, res){
    res.status(200).json({message:"welcome to my page"})
})


app.get("/Hii", async(req, res) =>{
    var data = await Person.find()
    res.status(200).json({status:"success"})
})

// import and use person routes
const personRoute = require('./routes/personRoutes')
app.use('/person', personRoute)

//menu routes
const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes)

app.listen(port, ()=>{
    console.log("server listing on 3000")
})