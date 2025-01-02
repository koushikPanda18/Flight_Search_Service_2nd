const CrudRepository=require('./crud-repository');
const {Flight}=require('../models');

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }
    async rawQuery(){
        //any query other than the inherited queries from the parent class can be written like this
    }
    async getAllflights(filter){
        const response=await Flight.findAll({
            where:filter
        });
        return response;
    }
}

module.exports=FlightRepository;