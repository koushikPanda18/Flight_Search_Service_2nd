class CrudRepository{
    constructor(model){
        this.model=model
    }
    async create(data){
        try {
            console.log("Inside Repository layer (Common)")
            console.log(data)
            const response=await this.model.create(data);
            console.log(response)
            return response;
        } catch(error) {
            console.log('Something went wrong in crud repo : create')
            throw error;
        }
    }
    async destroy(data){
        try {
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch(error) {
            console.log('Something went wrong in crud repo : destroy')
            throw{error}
        }
    }
    async get(data){
        try {
            console.log("Inside repository layer")
            const response=await this.model.findByPk(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in crud repo : get')
            throw{error}
        }
    }
    async getAll(){
        try {
            const response=await this.model.findAll()
            return response;
        } catch (error) {
            console.log('Something went wrong in crud repo : getAll')
            throw{error}
        }
    }
    async update(data){  //data is an object--{column,value}
        try {
            // const response=await this.model.update({capacity:data},{
            //     where:{
            //         id:id
            //     }
            // });
            console.log(data)
            const response=await this.model.findByPk(data.id);
            if(data.capacity) response.capacity=data.capacity;
            if(data.modelNumber) response.modelNumber=data.modelNumber;
            await response.save();
            return response;
            //return response;
        } catch (error) {
            console.log('Something went wrong in crud repo : update')
            throw{error}
        }
    }
}
module.exports=CrudRepository;