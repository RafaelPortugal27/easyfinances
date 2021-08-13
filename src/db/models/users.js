import { Sequelize, DataTypes, Model } from 'sequelize';
import options from '../config/config';

const sequelize = new Sequelize(options);

class Users extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */

  // eslint-disable-next-line no-unused-vars
  static associate(models) {
    // define association here
  }
}
Users.init({
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

export default Users;
