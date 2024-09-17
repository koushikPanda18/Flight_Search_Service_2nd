const express=require('express')
const {cityController}=require('../../controllers')
const {validateCreateRequest}=require('../../middlewares')
const router=express.Router();


router.post('/',cityController.createCity);
router.get('/:id',cityController.getCity)
router.get('/All',cityController.getAllCities)
router.delete('/:id',cityController.deleteCity)
router.patch('/',cityController.updateCity);

module.exports=router;