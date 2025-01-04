const express=require('express')
const {flightController}=require('../../controllers')
const {validateCreateRequest}=require('../../middlewares/flight-middleware')
const router=express.Router();


router.post('/',validateCreateRequest,flightController.createFlight);
// api/v1/flights?trips=MUM-DEL GET
router.get('/',flightController.getAllflights);
// api/v1/flights/:id
router.get('/:id',flightController.getFlight);




module.exports=router;