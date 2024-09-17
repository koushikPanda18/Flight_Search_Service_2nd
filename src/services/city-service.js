const { StatusCodes } = require('http-status-codes');
const CityRepository=require('../repositories/city-repository');


const cityRepository=new CityRepository();

async function createCity(data){
    try {
        console.log('Inside service layer of city')
        console.log(data);
        const city=await cityRepository.create(data);
        console.log(city)
        return city;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function getCity(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const city=await cityRepository.get(data);
        return city;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function getAllCities(){
    try {
        console.log('Inside service layer')
        const cities=await cityRepository.getAll();
        return cities;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function deleteCity(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const response=await cityRepository.destroy(data);
        if(!response){
            throw("City doesnot exist")
        }
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function updateCity(data){
    try {
        const city=await cityRepository.update(data);
        if(!city){
            throw("City doesnot exist")
        }
        return city;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports={
    createCity,
    getCity,
    getAllCities,
    deleteCity,
    updateCity
};