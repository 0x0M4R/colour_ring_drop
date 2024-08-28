// models/comm.model.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';

class Comm extends Model {}

Comm.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    minLength: 1,
  },
  sent_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  notification_type: {
    type: DataTypes.STRING,
    allowNull: false,
    maxLength: 50,
    minLength: 1,
  },
}, {
  sequelize,
  modelName: 'Comm',
  tableName: 'comms',
  timestamps: false,
});

export { Comm };
