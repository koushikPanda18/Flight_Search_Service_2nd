const express=require('express')
const {flightController}=require('../../controllers')
const {validateCreateRequest}=require('../../middlewares/flight-middleware')
const router=express.Router();


router.post('/',validateCreateRequest,flightController.createFlight);

module.exports=router;