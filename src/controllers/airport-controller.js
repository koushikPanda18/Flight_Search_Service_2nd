const {airportService}=require('../services');
const {StatusCodes}=require('http-status-codes');

/**
 * POST : /airports
 * req-body-{modelNumber-Airbus320,capacity-200}
 */
async function createAirport(req,res) {
    try {
        console.log("Inside controller layer")
        console.log(req.body)
        const airport=await airportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            msg:"successfully created an airport",
            data:airport,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while creating airport",
            data:{},
            error:{error}
        })
    }
}
/**
 * GET : /airports/:id
 * req-body-{}
 */
async function getAirports(req,res) {
    try {
        console.log("Inside controller layer")
        console.log(req.body)
        const airport=await airportService.getAirports(req.params.id)
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully fetched an airport",
            data:airport,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while fetching airport",
            data:{},
            error:{error}
        })
    }
}
/**
 * GET : /airports/all
 * req-body-{}
 */
async function getAllAirports(req,res) {
    try {
        const airport=await airportService.getAllAirports()
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully fetched all airports",
            data:airport,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while fetching airports",
            data:{},
            error:{error}
        })
    }
}
async function deleteAirport(req,res) {
    try {
        const airport=await airportService.deleteAirport(req.params.id)
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully deleted an airport",
            data:airport,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while deleting airport",
            data:{},
            error:{error}
        })
    }
}
// async function updateAirport(req,res) {
//     try {
//         const airport=await airportService.updateAirport({
//             id:req.body.id,
//             capacity:req.body.capacity,
//             modelNumber:req.body.modelNumber
//         })
//         return res.status(StatusCodes.OK).json({
//             success:true,
//             msg:"successfully updated an airport",
//             data:airport,
//             error:{}
//         })
//     } catch(error) {
//         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//             success:false,
//             msg:"Something went wrong while updating airport",
//             data:{},
//             error:{error}
//         })
//     }
// }
module.exports={
    createAirport,
    getAirports,
    getAllAirports,
    deleteAirport,
    // updateAirport
}