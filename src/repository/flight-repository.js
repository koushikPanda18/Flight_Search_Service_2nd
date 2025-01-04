const CrudRepository=require('./crud-repository');
const {Flight,Airplane,Airport}=require('../models');
const {Sequelize,Op}=require('sequelize')
const db=require('../models')
const {addRowLockOnFlights}=require('./queries')

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }
    async rawQuery(){
        //any query other than the inherited queries from the parent class can be written like this
    }
    async getAllflights(filter){
        const response=await Flight.findAll({
            where:filter,
            include:[
                {
                    model:Airplane,
                    required:true,
                    as: 'airplane-details'
                },
                {
                    model:Airport,
                    required:true,
                    as:'departure-airport',
                    on:{
                        col1:Sequelize.where(Sequelize.col('Flight.departureAirportId'),'=',Sequelize.col("departure-airport.code"))
                    }
                },
                {
                    model:Airport,
                    required:true,
                    as:'arival-airport',
                    on:{
                        col1:Sequelize.where(Sequelize.col('Flight.arivalAirportId'),'=',Sequelize.col("arival-airport.code"))
                    }
                } 
            ] 
        });
        return response;
    }

    async updateRemainingSeats(flightId, seats, dec = true) {
        await db.sequelize.query(addRowLockOnFlights(flightId));      //Applies a row lock for updation of seats(locking mechanism to avoid Race Condition)
        const flight=await Flight.findByPk(flightId);
        if(parseInt(dec)){
            await flight.decrement('totalSeats', {by:seats} );
        }
        else{
            await flight.increment('totalSeats', {by:seats} );
        }
        return flight;
    }
}

module.exports=FlightRepository;