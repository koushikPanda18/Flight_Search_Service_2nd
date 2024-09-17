const { StatusCodes } = require('http-status-codes');
const AirplaneRepository=require('../repositories/airplane-repository');


const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const airplane=await airplaneRepository.create(data);
        console.log(airplane)
        return airplane;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function getAirplanes(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const airplane=await airplaneRepository.get(data);
        return airplane;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function getAllAirplanes(){
    try {
        console.log('Inside service layer')
        const airplane=await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function deleteAirplane(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const response=await airplaneRepository.destroy(data);
        if(!response){
            throw("Airplane doesnot exist")
        }
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function updateAirplane(data){
    try {
        const airplane=await airplaneRepository.update(data);
        if(!airplane){
            throw("Airplane doesnot exist")
        }
        return airplane;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAllAirplanes,
    deleteAirplane,
    updateAirplane
};