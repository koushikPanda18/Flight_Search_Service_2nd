const CrudRepository=require('./crud-repository');
const {Airport}=require('../models');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport)
    }
    async rawQuery(){
        //any query other than the inherited queries from the parent class can be written like this
    }
}

module.exports=AirportRepository;