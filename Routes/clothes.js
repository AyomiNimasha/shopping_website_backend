//1.initializing router
const express=require('express');
const router=express.Router();
const clothModel=require('../models/cloth')
router.use(express.json)

//create endpoints

//01.add clothes to database
router.post('/clothes',async(req,res)=>{
    const cloth =new clothModel({
    productID:req.body.productID,
    image:req.body.image,
    image2:req.body.image2, 
    category:req.body.category,
    subCategory:req.body.subCategory,
    productName:req.body.productName,
    price: req.body.price,
    sizes: req.body.sizes,
    
    });
    try{
        const newCloth=await cloth.save()//save cloth in a new variable
        res.status(201).json(newCloth);//respond to database
    }catch(error){
        res.status(400).json({message:error.message});
    }
})

//02.read clothes data
router.get ('/clothes',async(req,res)=>{
    try{
        const viewcloths=await clothModel.find();
        res.json(viewcloths);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
//2.export router
module.exports=router;