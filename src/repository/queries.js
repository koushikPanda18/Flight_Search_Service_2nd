function addRowLockOnFlights(flightId){
    return `SELECT * from flights where Flights.id = ${flightId} FOR UPDATE;`
}


module.exports={
    addRowLockOnFlights
}