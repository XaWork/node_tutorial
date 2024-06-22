const express = require("express")
const route = express.Router()
const Person = require('./../model/Person')


route.post('/', async(req, res) => {
    try{
        const data = req.body

        const newPerson = new Person(data)
    
        //save person data
        var response = await newPerson.save()
        console.log("Data Saved.")
        res.status(200).json(response)
    }catch(error){
        console.log("Gettig error : ", error)
        res.status(500).json({error:"Internal server error"})
    }

})

route.get("/", async (req, res) =>{
    try{
        var data = await Person.find()
        res.status(200).json({status:"success"})
    }catch(err){
        console.log("Error is ", err)
    }
})

route.get("/:workType", async(req, res)=>{
    try{
        const workType = req.params.workType;
        if(workType == "chef" || workType == "manager" || workType =="waiter"){
            const person = await Person.find({work:workType});
            console.log(person);
            res.status(200).json({status:'success', person:person})
        }else{
            res.status(200).json({status:"error", message:"Invalid work type."})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
    }
})

route.put('/:id', async(req, res) => {
    try{
        const personId = req.params.id
        const data = req.body

        const response = await Person.findByIdAndUpdate(personId, data, {
            new: true,
            runValidators : true
        })

        if(!response){
            console.log("Person Id not found.")
            res.status(400).json({error:"Person Id not found."})
        }

        res.status(200).json(response)
    }catch{
        console.log(err)
        res.status(500).json('internal server error')}
})

route.delete('/:id', async(req, res) =>{
    try{

        const personId = req.params.id
    
        const response = await Person.findByIdAndDelete(personId)

        if(!response){
            console.log("Person Id not found.")
            res.status(400).json({error:"Person Id not found."})
        }

        res.status(200).json({message:"Data deleted successfully."})
    }catch(err){
        console.log(err)
        res.status(500).json('internal server error')
    }
})

module.exports = route
