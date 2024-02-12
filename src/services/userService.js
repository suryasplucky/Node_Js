const User = require('../database/User.js');

const getAllUsers = () => {
    try {
      const allUsers = User.getUsers();
      return allUsers;
    } catch (error) {
      throw error;
    }
  };


  module.exports = {
    getAllUsers
  };
  