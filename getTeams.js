const membersService = require("../services/memberser.js");



exports.getAll_TeamList = async (req, res, next) => {
  try {
    const result = await membersService.getTeams();
    return res
      .status(200)
      .json({
        success: true,
        status: 200,
        data: result,
        message: "Team list fetch successfully",
        count: result.length,
      });
  } catch (e) {
    return res
      .status(400)
      .json({ success: false, status: 400, message: e.message });
  }
};

exports.getStatus = async (req, res, next) => {
  try {
    const result = await membersService.getStatusAll();
    return res
      .status(200)
      .json({ success: true, status: 200, data: result, count: result.length });
  } catch (e) {
    return res
      .status(400)
      .json({ success: false, status: 400, message: e.message });
  }
};

exports.Card = async (req, res, next) => {
  try {
    const result = await membersService.getCards();
    return res
      .status(200)
      .json({ success: true, status: 200, data: result, count: result.length });
  } catch (e) {
    return res
      .status(400)
      .json({ success: false, status: 400, message: e.message });
  }
};

exports.getbasedonidCard = async (req, res, next) => {
  const id = req ? req.body.id : null;
  try {
    const result = await membersService.getCardsById(id);
    return res
      .status(200)
      .json({ success: true, status: 200, data: result, count: result.length });
  } catch (e) {
    return res
      .status(400)
      .json({ success: false, status: 400, message: e.message });
  }
};

exports.getUIscreen = async (req, res, next) => {
    try { 
        

        
    } catch (e) {
      res.status(400).json({ success: false, status: 400, message: e.message });
    }
  };
  
