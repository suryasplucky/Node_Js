const userService = require("../services/userService");


const getUserDetails = (req, res) => {

  try {
    // *** ADD ***
    const allUsersdata = userService.getAllUsers();
    res.send({ status: "OK", data: allUsersdata });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

module.exports = {
    getUserDetails
  };
