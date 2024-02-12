const DB = require("../models/Query_DB")
const getUsers = async () => {
    try {
      let genQuery = `SELECT * FROM users WHERE id = 310;`;
     
      const viewUser = await DB.executeQuery(genQuery);
      
      return viewUser.length > 0 ? viewUser : ["Welcome"];
    } catch (error) {
      throw { status: 500, message: error };
    }
  };

  module.exports = {
    getUsers
  };