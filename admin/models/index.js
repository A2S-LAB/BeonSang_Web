const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config.js')[env];

const db= {};
const sequelize = new Sequelize(config.database,config.username,config.password,config);

db.sequelize = sequelize; 
db.Sequelize = Sequelize; 

db.Admin = require('./admin.js')(sequelize,Sequelize);

module.exports = db;