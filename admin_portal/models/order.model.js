// models/order.model.js

import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.js';

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 0,
      max: 2147483647,
    },
  },
  payment_id: {
    type: DataTypes.STRING,
    allowNull: false,
    maxLength: 100,
  },
  status: {
    type: DataTypes.ENUM(
      'Pending',
      'Confirmed',
      'Processing',
      'Shipped',
      'Out for Delivery'
    ),
    allowNull: false,
    defaultValue: 'Pending',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    readOnly: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    readOnly: true,
  },
}, {
  sequelize,
  modelName: 'Order',
  tableName: 'orders',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export { Order };