class CrudRepository{
    constructor(model){
        this.model=model
    }
    async create(data){
        try {
            console.log("Inside Repository layer")
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
            error('Something went wrong in crud repo : destroy')
            throw{error}
        }
    }
    async get(data){
        try {
            const response=await this.model.findByPk({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            error('Something went wrong in crud repo : get')
            throw{error}
        }
    }
    async getAll(){
        try {
            const response=await this.model.findAll()
            return response;
        } catch (error) {
            error('Something went wrong in crud repo : getAll')
            throw{error}
        }
    }
    async update(id,data){  //data is an object--{column,value}
        try {
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            error('Something went wrong in crud repo : update')
            throw{error}
        }
    }
}
module.exports=CrudRepository;