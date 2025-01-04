const express=require('express')
const {flightController}=require('../../controllers')
const {validateCreateRequest,vatidateUpdateSeatsRequest}=require('../../middlewares/flight-middleware')
const router=express.Router();


router.post('/',validateCreateRequest,flightController.createFlight);
// api/v1/flights?trips=MUM-DEL GET
router.get('/',flightController.getAllflights);
// api/v1/flights/:id
router.get('/:id',flightController.getFlight);
//api/v1/flights/:id/seats PATCH
router.patch('/:id/seats',vatidateUpdateSeatsRequest,flightController.updateSeats);



module.exports=router;