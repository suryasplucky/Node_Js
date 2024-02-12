const express = require("express");
const userController = require("../../controllers/userController");

const router = express.Router();

// POST Methods
router.get('/getusers',userController.getUserDetails);

module.exports = router;
