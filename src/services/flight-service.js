const { StatusCodes } = require('http-status-codes');
const FlightRepository=require('../repository/flight-repository');


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
module.exports={
    createFlight,
};