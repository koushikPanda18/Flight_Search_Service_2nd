const {flightService}=require('../services');
const {StatusCodes}=require('http-status-codes');

/**
 * POST : /flights
 * req-body-{
 *      flightNumber:'UK 808'
 *      airplaneId: 'a380'
 *      departureAirportId: 11
 *      arivalAirportId :13
 *      arivalTime: 09:05:12
 *      departureTime: 12:09:00
 *      price: 2000
 *      boardingGate: '12A'
 *      totalSeats: 120
 * }
 */
async function createFlight(req,res) {
    try {
        console.log("Inside controller layer of city")
        console.log(req.body)
        const flight=await flightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arivalAirportId:req.body.arivalAirportId,
            arivalTime:req.body.arivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            msg:"successfully created a flight",
            data:flight,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while creating flight",
            data:{},
            error:{error}
        })
    }
}

async function getAllflights(req,res) {
    try {
        const flights=await flightService.getAllflights(req.query)
        return res.status(StatusCodes.CREATED).json({
            success:true,
            msg:"successfully fetched flights",
            data:flights,
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while fetching flights",
            data:{},
            error:{error}
        })
    }
}

/**
 * GET : /flights/:id
 * req-body-{}
 */
async function getFlight(req,res) {
    try {
        console.log("Inside controller layer")
        console.log(req.body)
        const flight=await flightService.getFlight(req.params.id)
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully fetched a flight",
            data:flight,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while fetching flight",
            data:{},
            error:{error}
        })
    }
}


async function updateSeats(req,res) {
    try {
        console.log("Inside controller layer")
        const response=await flightService.updateSeats({
            flightId:req.params.id,
            seats:req.body.seats,
            dec:req.body.dec
        })
        return res.status(StatusCodes.OK).json({
            success:true,
            msg:"successfully updated seat for a flight",
            data:response,
            error:{}
        })
    } catch(error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:"Something went wrong while updateing seats",
            data:{},
            error:{error}
        })
    }
}
module.exports={
    createFlight,
    getAllflights,
    getFlight,
    updateSeats
}