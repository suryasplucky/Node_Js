
const con = require("../configs/db");
const models = require("../models");


function executeQuery(databaseQuery) {
  return new Promise((data) => {
    con.getConnection(function async(err, connection, pool) {
      if (err) throw err;
      connection.query(databaseQuery, function (error, result) {
        if (error) {
          connection.release();
          throw error;
        }

        try {
          data(result);
          connection.release();
        } catch (error) {
          data({});
          connection.release();
          throw error;
        }
      });
    });
  });
}


module.exports = {executeQuery}