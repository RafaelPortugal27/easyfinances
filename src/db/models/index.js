import getConfig from 'next/config';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const {
  serverRuntimeConfig: {
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DIALECT,
    DB_HOST,
    DB_PORT,
  },
} = getConfig();

const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  { dialect: DB_DIALECT, host: DB_HOST, port: DB_PORT },
);

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
