const CrudRepository=require('./crud-repository');
const {Flight}=require('../models');

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }
    async rawQuery(){
        //any query other than the inherited queries from the parent class can be written like this
    }
}

module.exports=FlightRepository;