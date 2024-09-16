const express=require('express');

const {serverConfig} =require('./config/index')
const appRouter=require('./routes')
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',appRouter);

app.listen(serverConfig.PORT,()=>{
    console.log(`server started at port ${serverConfig.PORT}`)
})