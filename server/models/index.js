require('dotenv').config();
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Sequelize = require('sequelize');
const db = {};

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize('crewbuilder', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false,

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}


fs
  .readdirSync(path.join(__dirname))
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;