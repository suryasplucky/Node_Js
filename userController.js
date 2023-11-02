const userService = require("../services/userService");
const workingOutService = require("../services/workingOutService")
const memberService = require("../services/members")
const RecorService = require("../services/RecorService")


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

const getAllworkouts = (req, res) => {
    try {
        const WorksoutsAll =  workingOutService.getMyWorkouts();
        res.send({ status: "OK", data: WorksoutsAll });
    } catch (error) {
        res.status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    }

}

const getmembers = (req, res) => {

    try {
          const members = memberService.getAllmembers()
          res.send({status:'ok', data : members});
    } catch (error) {
         res.status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getrecords = (req, res) => {
       try {
             const getRecords = RecorService.getrecords();
             res.send({status :"OK", data:getRecords});
       } catch (error) {
        res.status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
       }
}


const getDetailsofWorkoutsid = (req, res) => {
    const id = req.body.id; 
    console.log(id); 

    try {
        const getdata = workingOutService.getbyId(id);
        res.send({status : "OK", code:200, data:getdata});
        
    } catch (error) {
        
    }
}



module.exports = {
    getUserDetails,
    getAllworkouts,
    getmembers,
    getrecords,
    getDetailsofWorkoutsid
  };
