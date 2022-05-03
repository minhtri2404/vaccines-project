const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const Province = require('./provinces.model');

const VNVCCenter = mysqlDb.define(
  'vnvcCenters',
  {
    centerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  { tableName: 'vnvcCenters', timestamps: false },
);

// Foreign key
Province.hasMany(VNVCCenter, {
  sourceKey: 'provinceId',
  foreignKey: {
    name: 'provinceId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
VNVCCenter.belongsTo(Province, {
  foreignKey: 'provinceId',
});

module.exports = VNVCCenter;