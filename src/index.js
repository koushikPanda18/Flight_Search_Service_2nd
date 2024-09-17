const express=require('express');

const {serverConfig} =require('./config/index')
const appRouter=require('./routes')
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',appRouter);

app.listen(serverConfig.PORT,async()=>{
    console.log(`server started at port ${serverConfig.PORT}`)
    //

    const {Airport,City}=require("./models")
    const cities=await City.findByPk(9);
    console.log(cities)
    //const response=await cities.createAirport({name:'Netaji Subhash Airport',code:'KOL'})
    // await City.destroy({
    //     where:{
    //         id:10
    //     }
    // })

})