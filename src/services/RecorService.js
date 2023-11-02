const DB = require('../database/db.json')



const getrecords = () => {
    try {
        const records = DB.records;
        return records;
    } catch (error) {
        throw error
    }
}

module.exports = {
    getrecords
}