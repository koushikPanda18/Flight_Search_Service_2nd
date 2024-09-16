const AirplaneRepository=require('../repositories/airplane-repository');


const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try {
        console.log('Inside service layer')
        console.log(data);
        const airplane=await airplaneRepository.create(data);
        console.log(airplane)
        return airplane;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

module.exports=createAirplane;