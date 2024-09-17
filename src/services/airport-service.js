const { StatusCodes } = require('http-status-codes');
const AirportRepository=require('../repository/airport-repository');
//const airport = require('../models/airport');


const airportRepository=new AirportRepository();

async function createAirport(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const airport=await airportRepository.create(data);
        console.log(airport)
        return airport;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function getAirports(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const airport=await airportRepository.get(data);
        return airport;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function getAllAirports(){
    try {
        console.log('Inside service layer')
        const airport=await airportRepository.getAll();
        return airport;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function deleteAirport(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const response=await airportRepository.destroy(data);
        if(!response){
            throw("Airport doesnot exist")
        }
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function updateAirport(data){
    try {
        const airport=await airportRepository.update(data);
        if(!airport){
            throw("Airplane doesnot exist")
        }
        return airport;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports={
    createAirport,
    getAirports,
    getAllAirports,
    deleteAirport,
    updateAirport
};