const { StatusCodes } = require('http-status-codes');
const FlightRepository=require('../repository/flight-repository');
const { Op } = require('sequelize');


const flightRepository=new FlightRepository();

async function createFlight(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const flight=await flightRepository.create(data);
        console.log(flight)
        return flight;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function getAllflights(query) {
    let customfilter={};
    const endingTripTime="23:59:00";
    //trips=MUM-DEL
    if(query.trips){
        [departureAirportId, arivalAirportId]=query.trips.split("-");
        customfilter.arivalAirportId=arivalAirportId;
        customfilter.departureAirportId=departureAirportId;
    }
    if(query.price){
        [minPrice,maxPrice]=query.price.split("-");
        customfilter.price={
            [Op.between]:[minPrice,((maxPrice==undefined)?20000:maxPrice)]
        }
    }
    if(query.travellers){
        customfilter.totalSeats={
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate){
        customfilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+endingTripTime]
        }
    }
    try {
        const flights=await flightRepository.getAllflights(customfilter);
        return flights;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function getFlight(id) {
    try {
        console.log('Inside service layer')
        const flight=await flightRepository.get(id);
        return flight;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports={
    createFlight,
    getAllflights,
    getFlight,
};