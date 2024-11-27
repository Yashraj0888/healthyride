    const express=require('express');
    const app=express();
    const dotenv=require('dotenv');
    dotenv.config();
    const cors=require('cors');
    app.use(cors());
    const connectDB=require('./db/db');
    connectDB();
    const userRoutes=require('./routes/user.routes');
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.get('/',(req,res)=>{
        res.send('helloo');
    });

    app.use('/users',userRoutes);



    module.exports=app;
