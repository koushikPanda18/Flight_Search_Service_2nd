const {StatusCodes}=require('http-status-codes');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating airport",
                data:{},
                error:{explanation:"name not found in incomming request"}
        })
    }
    if(!req.body.code){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating airport",
                data:{},
                error:{explanation:"code not found in incomming request"}
        })
    }
    if(!req.body.cityId){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating airport",
                data:{},
                error:{explanation:"cityId not found in incomming request"}
        })
    }
    next();
}


module.exports={
    validateCreateRequest
}