const DB = require("./user.json");

const getUsers = () => {
    try {
      let user = DB.products
      return user;
    } catch (error) {
      throw { status: 500, message: error };
    }
  };

  module.exports = {
    getUsers
  };