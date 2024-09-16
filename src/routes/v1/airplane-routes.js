const express=require('express')
const {airplaneController}=require('../../controllers')
const {validateCreateRequest}=require('../../middlewares')
const router=express.Router();


router.post('/',validateCreateRequest,airplaneController.createAirplane);
router.get('/:id',airplaneController.getAirplanes)
router.get('/all',airplaneController.getAllAirplanes)
router.delete('/:id',airplaneController.deleteAirplane)
router.patch('/',airplaneController.updateAirplane);

module.exports=router;