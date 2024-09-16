const {StatusCodes}=require('http-status-codes');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"modelNumber not found in incomming request"}
        })
    }
    // if(!isAln){     MODELNUMBER alpha aNumeric check
    //     return res.status(StatusCodes.BAD_REQUEST).json({
    //             success:false,
    //             msg:"Something went wrong while creating airplane",
    //             data:{},
    //             error:{explanation:"modelNumber not found in incomming request"}
    //     })
    // }
    if(!req.body.capacity){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"capacity not found in incomming request"}
        })
    }
    if(req.body.capacity>1000){
        return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                msg:"Something went wrong while creating airplane",
                data:{},
                error:{explanation:"capacity can't be more than 1000: Validation error"}
        })
    }
    next();
}


module.exports={
    validateCreateRequest
}