const DB = require('../database/db.json');


const getAllmembers = () => {
    try {
        const getmembers = DB.members;
        return getmembers
    } catch (error) {
        throw error
    }
}



module.exports = {
    getAllmembers,
}