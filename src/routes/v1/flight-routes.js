const express=require('express')
const {flightController}=require('../../controllers')
const {validateCreateRequest}=require('../../middlewares/flight-middleware')
const router=express.Router();


router.post('/',validateCreateRequest,flightController.createFlight);
// api/v1/flights trips=MUM-DEL GET
router.get('/',flightController.getAllflights);

module.exports=router;