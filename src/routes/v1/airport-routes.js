const express=require('express')
const {airportController}=require('../../controllers')
const {validateCreateRequest}=require('../../middlewares/airport-middleware')
const router=express.Router();


router.post('/',validateCreateRequest,airportController.createAirport);
router.get('/:id',airportController.getAirports)
router.get('/all',airportController.getAllAirports)
router.delete('/:id',airportController.deleteAirport)
//router.patch('/',airportController.updateAirplane);

module.exports=router;