const express=require('express');

const {PORT} =require('./config/index')
const appRouter=require('./routes')
const app=express();

app.use('/api',appRouter);

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})