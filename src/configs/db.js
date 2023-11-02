const mysql = require('mysql2');
const config = require('./config.json');

let host = config.dbConfig.development.host;
let user = config.dbConfig.development.user ;
let password = config.dbConfig.development.password;
let database = config.dbConfig.development.database;

let pool = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database,
    connectionLimit: 80, //important
    connectTimeout: 60 * 60 * 1000,
    debug: false
});
exports.getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        callback(err, connection, pool);
    });
};