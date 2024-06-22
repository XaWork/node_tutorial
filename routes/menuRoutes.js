const express = require('express')
const route = express.Router()
const Menu = require('./../model/Menu')

route.get('/', async(req, res) => {
    try{
        const menus = await Menu.find();
        console.log(menus)
        res.status(200).json({status:"success", menu:menus})
    }catch(err){
        console.log(err)
        res.status(500).json('internal server error')
    }
})

route.post('/', async(req, res) => {
    try{
        const data = req.body
        const newMenu = new Menu(data)

        //save data
        const response = await newMenu.save()
        console.log(response)
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json('internal server error')
    }
})

route.get('/:taste', async(req, res) => {
    try{
        const taste = req.params.taste
        if(taste == 'spicy' || taste == 'sweet'){
            const menuItems = await Menu.find({taste:taste})
            console.log(menuItems)
            res.status(200).json({menuItems})
        }else{
            console.log("Invalid taste type.")
            res.status(200).json({status:"error", message:"Invalid taste type."})
        }
    }catch(err){
        console.log(err)
        res.status(500).json('internal server error')
    }
})

module.exports = route