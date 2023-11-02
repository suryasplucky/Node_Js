const config = require("../configs/config.json");

const Sequelize = require("sequelize");

let host = config.dbConfig.development.host;
let user = config.dbConfig.development.user;
let password = config.dbConfig.development.password;
let database = config.dbConfig.development.database;

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000,
        connectTimeout: 60000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });


const sequelizeDB = {};

sequelizeDB.Sequelize = Sequelize;
sequelizeDB.sequelize = sequelize;

sequelizeDB.Team = require("./Team")(sequelize,Sequelize);

module.exports = sequelizeDB;