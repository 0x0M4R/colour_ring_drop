// models/user.model.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [1, 150],
      is: /^[\w.@+-]+$/,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 128],
    },
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
    maxLength: 150,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
    maxLength: 150,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
    maxLength: 15,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
});

export {User};
