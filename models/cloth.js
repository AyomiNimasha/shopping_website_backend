const mongoose  = require("mongoose");

const clothSchema=new mongoose.Schema({
    productID:String,
    image: String,
    image2: String,
    category:[String],
    subCategory:[String],
    productName: String,
    price: Number,
    sizes: [String],
    
});
module.exports=mongoose.model('clothes',clothSchema)



