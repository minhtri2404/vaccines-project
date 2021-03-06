const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vaccinePackagesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prevention: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  avt: {
    type: String,
    required: true,
  },
  category: {
    categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    name: String,
  },
  vaccines: [
    {
      vaccineId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Vaccine',
      },
      vaccineName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const VaccinePackage = mongoose.model(
  'VaccinePackage',
  vaccinePackagesSchema,
  'vaccinePackages',
);

module.exports = VaccinePackage;
