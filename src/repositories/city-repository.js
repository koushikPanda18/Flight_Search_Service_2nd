const CrudRepository=require('./crud-repository');
const {City}=require('../models');

class CityRepository extends CrudRepository{
    constructor(){
        super(City)
    }
    async rawQuery(){
        //any query other than the inherited queries from the parent class can be written like this
    }
    async update(data){  //data is an object--{column,value}
        try {
            console.log(data)
            const response=await this.model.findByPk(data.id);
            if(data.name) response.name=data.name;
            await response.save();
            console.log(response)
            return response;
            //return response;
        } catch (error) {
            console.log('Something went wrong in crud repo : update')
            throw{error}
        }
    }
    
}

module.exports=CityRepository;