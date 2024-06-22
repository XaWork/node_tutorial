const express = require('express')
const db = require('./db')
const app = express()

const bodyParse = require('body-parser')
app.use(bodyParse.json())

require('dotenv').config();
const port = process.env.PORT || 3000

// log middleware
const logRequest = (req, res, next) =>{
    console.log(`[${newDate().toLocalString()}]  Request made to : ${req.originalUrl}`)
    next();
}
app.use(logRequest)

app.get("/", function(req, res){
    res.status(200).json({message:"welcome to my page"})
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