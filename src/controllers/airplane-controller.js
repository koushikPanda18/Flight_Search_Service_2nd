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
        const airplane=await airplaneService.createAirplane({
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
/**
 * POST : /airplanes/:id
 * req-body-{}
 */
async function getAirplanes(req,res) {
    try {
        console.log("Inside controller layer")
        console.log(req.body)
        const airplane=await airplaneService.getAirplanes(req.params.id)
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully fetched an airplane",
            data:airplane,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while fetching airplane",
            data:{},
            error:{error}
        })
    }
}
/**
 * POST : /airplanes/all
 * req-body-{}
 */
async function getAllAirplanes(req,res) {
    try {
        const airplane=await airplaneService.getAllAirplanes()
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully fetched all airplane",
            data:airplane,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while fetching airplanes",
            data:{},
            error:{error}
        })
    }
}
async function deleteAirplane(req,res) {
    try {
        const airplane=await airplaneService.deleteAirplane(req.params.id)
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully deleted an airplane",
            data:airplane,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while deleting airplane",
            data:{},
            error:{error}
        })
    }
}
async function updateAirplane(req,res) {
    try {
        const airplane=await airplaneService.updateAirplane({
            id:req.body.id,
            capacity:req.body.capacity,
            modelNumber:req.body.modelNumber
        })
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully updated an airplane",
            data:airplane,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while deleting airplane",
            data:{},
            error:{error}
        })
    }
}
module.exports={
    createAirplane,
    getAirplanes,
    getAllAirplanes,
    deleteAirplane,
    updateAirplane
}