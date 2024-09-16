const {airplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');

/**
 * POST : /airplanes
 * req-body-{modelNumber-Airbus320,capacity-200}
 */
async function createAirplane(req,res) {
    try {
        console.log("Inside controller layer")
        console.log(req.body)
        const airplane=await airplaneService({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            msg:"successfully created an airplane",
            data:airplane,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while creating airplane",
            data:{},
            error:{error}
        })
    }
}

module.exports={
    createAirplane
}