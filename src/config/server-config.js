const dotenv=require('dotenv');  // returns an object

dotenv.config();

module.exports={
    PORT:process.env.PORT
}