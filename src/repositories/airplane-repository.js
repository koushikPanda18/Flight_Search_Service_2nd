const CrudRepository=require('./crud-repository');
const {Airplane}=require('../models');

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane)
    }
    async rawQuery(){
        //any query other than the inherited queries from the parent class can be written like this
    }
}

module.exports=AirplaneRepository;