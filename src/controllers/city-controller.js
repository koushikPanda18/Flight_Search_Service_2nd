const {cityService}=require('../services');
const {StatusCodes}=require('http-status-codes');

/**
 * POST : /cities
 * req-body-{name-Bengaluru}
 */
async function createCity(req,res) {
    try {
        console.log("Inside controller layer of city")
        console.log(req.body)
        const city=await cityService.createCity({
            name:req.body.name
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            msg:"successfully created a city",
            data:city,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while creating city",
            data:{},
            error:{error}
        })
    }
}
/**
 * POST : /cities/:id
 * req-body-{}
 */
async function getCity(req,res) {
    try {
        console.log("Inside controller layer")
        console.log(req.body)
        const city=await cityService.getCity(req.params.id)
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully fetched city",
            data:city,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while fetching city",
            data:{},
            error:{error}
        })
    }
}
/**
 * POST : /cities/all
 * req-body-{}
 */
async function getAllCities(req,res) {
    try {
        const city=await cityService.getAllCities()
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully fetched all cities",
            data:city,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while fetching cities",
            data:{},
            error:{error}
        })
    }
}
async function deleteCity(req,res) {
    try {
        const city=await cityService.deleteCity(req.params.id)
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully deleted a city",
            data:city,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while deleting city",
            data:{},
            error:{error}
        })
    }
}
async function updateCity(req,res) {
    try {
        const city=await cityService.updateCity({
            id:req.body.id,
            name:req.body.name
        })
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully updated a city",
            data:city,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while updating city",
            data:{},
            error:{error}
        })
    }
}
module.exports={
    createCity,
    getCity,
    getAllCities,
    deleteCity,
    updateCity
}