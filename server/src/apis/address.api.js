const addressApi = require('express').Router();
const addressController = require('../controllers/address.controller');

addressApi.get('/province/all', addressController.getAllProvinces);
addressApi.get(
  '/district/by-province/:provinceId',
  addressController.getDistrictsByProvinceId,
);
addressApi.get(
  '/ward/by-district/:districtId',
  addressController.getWardsByDistrictId,
);
addressApi.get(
  '/center-list/:provinceId',
  addressController.getCenterListByProvinceId,
);

module.exports = addressApi;
