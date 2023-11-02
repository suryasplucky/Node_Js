const Query = require('../models/Query_DB');

class masterService {
    static async getTeams() {
        try {
          const getTeamList = await Query.executeQuery(
              `SELECT * FROM Team WHERE isDeleted <> 1 order By id DESC`
            );
            return getTeamList.length > 0 ? getTeamList : null;
        } catch (error) {
          throw error
        }
    }

    static async getStatusAll() {
        try {
          const getStatus = await Query.executeQuery(
              `SELECT * FROM Status order By id DESC`
            );
            return getStatus.length > 0 ? getStatus : null;
        } catch (error) {
          throw error
        }
    }

    static async getCards() {
        try {
          const getStatus = await Query.executeQuery(
              `SELECT * FROM Card WHERE status = 0 order By id DESC`
            );
            return getStatus.length > 0 ? getStatus : null;
        } catch (error) {
          throw error
        }
    }

    static async getCardsById(id) {
      try {
        const getStatus = await Query.executeQuery(
          `SELECT * FROM Card WHERE id = ${id}`
        );
        return getStatus.length > 0 ? getStatus : null;
      } catch (error) {
        throw error;
      }
    }
    
    
}

module.exports = masterService