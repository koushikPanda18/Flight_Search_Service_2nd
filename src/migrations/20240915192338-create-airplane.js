'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {  // WHEN WE MIGRATE THE TABLE TO THE DATABASE,THIS ASYNC UP FUNCTION GETS APPLED
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelNumber: {
        type: Sequelize.STRING,
        allowNull:false,
        // validate:{
        //   isAlphanumeric:true
        // }
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull:false,
        validate:{max:1000}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {   // WHEN WE WANT TO REMOVE THE TABLE TO THE DATABASE,THIS ASYNC DOWN FUNCTION GETS APPLED
    await queryInterface.dropTable('Airplanes');
  }
};