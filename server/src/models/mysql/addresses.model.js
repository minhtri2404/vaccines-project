const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const Ward = require('./wards.model');

const Address = mysqlDb.define(
  'addresses',
  {
    addressId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    detail: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
  },
  { tableName: 'addresses', timestamps: false, initialAutoIncrement: 1 },
);

// Foreign key
Ward.hasMany(Address, {
  sourceKey: 'wardId',
  foreignKey: {
    name: 'wardId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Address.belongsTo(Ward, {
  foreignKey: 'wardId',
});

module.exports = Address;
