require('dotenv').config()

//1.add express
const express=require('express');
const app=express();

//3.require mongoose
const mongoose=require('mongoose');

const cors = require('cors')
app.use(cors())


//4.database connection
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,
    useUnifiedTopology: true,});
const db=mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('Connected to Database'))

//routes endpoints
app.use(express.json())
const clothesRouter=require('./Routes/clothes')
app.use('/',clothesRouter)

//2.app.use(express.json());
app.listen(3000,()=>console.log('Server started'))
