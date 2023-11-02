const express = require("express");
const userController = require("../../controllers/userController");
const getTeams = require("../../controllers/getTeams");

const router = express.Router();

//GET Methods
router.get("/getUserdata", userController.getUserDetails);
router.get('/getworkouts', userController.getAllworkouts);
router.get('/members', userController.getmembers);
router.get('/records',userController.getrecords);



// POST Methods
router.post('/userId', userController.getDetailsofWorkoutsid);

router.get('/teams', getTeams.getAll_TeamList);
router.get('/status', getTeams.getStatus);
router.get('/Card',getTeams.Card);

router.post('/getCard', getTeams.getbasedonidCard)

router.get('/ss', getTeams.getUIscreen )






module.exports = router;






// *******************************************************************************************************************************

// *** ADD ***
// const apicache = require("apicache");
// const workoutController = require("../../controllers/workoutController");
// const recordController = require("../../controllers/recordController");

// *** ADD ***
// const cache = apicache.middleware;

// // Custom made middlewares
// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");

// router.post("/", authenticate, authorize, workoutController.createNewWorkout);


// router.post("/",  workoutController.createNewWorkout);


// *** ADD ***
// router.get("/", workoutController.getAllWorkouts);

// router.get("/:workoutId", workoutController.getOneWorkout);

// router.get("/:workoutId/records", recordController.getRecordForWorkout);

// router.post("/", workoutController.createNewWorkout);

// router.patch("/:workoutId", workoutController.updateOneWorkout);

// router.delete("/:workoutId", workoutController.deleteOneWorkout);

// router.get("/", cache("2 minutes"),  workoutController.getAllWorkouts);
