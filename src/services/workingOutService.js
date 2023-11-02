const DB = require('../database/db.json')


const getMyWorkouts = () => {
    let getWorkouts = DB.workouts;
    try {
       return getWorkouts;
    } catch (error) {
        throw error
    }
}

const getbyId = (param) => {
    try {
        let getWorkouts = DB.workouts;

        const Record  = getWorkouts.filter((item)=> item.id == param) ;        
        return Record;

    } catch (error) {
        throw error
    }
}

module.exports = {
    getMyWorkouts,
    getbyId
}