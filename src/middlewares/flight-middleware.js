const {StatusCodes}=require('http-status-codes');
const {compareTime}=require("../utils/Helpers/dateTime-Helpers")

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"flightNumber not found in incomming request"}
        })
    }
    if(!req.body.airplaneId){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"airplaneId not found in incomming request"}
        })
    }
    if(!req.body.departureAirportId){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"departureAirportId not found in incomming request"}
        })
    }
    if(!req.body.arivalAirportId){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"arivalAirportId not found in incomming request"}
        })
    }
    if(!req.body.arivalTime){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"arivalTime not found in incomming request"}
        })
    }
    if(!req.body.departureTime){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"departureTime not found in incomming request"}
        })
    }
    if(!req.body.price){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"price not found in incomming request"}
        })
    }
    if(!req.body.totalSeats){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating flight",
                data:{},
                error:{explanation:"totalSeats not found in incomming request"}
        })
    }
    if(!compareTime(req.body.arivalTime,req.body.departureTime)){
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            msg:"Something went wrong while creating flight",
            data:{},
            error:{explanation:"arrival time cannot be less than departure time"}
    })
    }
    next();
}


module.exports={
    validateCreateRequest
}