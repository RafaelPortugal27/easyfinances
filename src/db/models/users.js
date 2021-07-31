const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    familyName: DataTypes.STRING,
    givenName: DataTypes.STRING,
    googleId: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};