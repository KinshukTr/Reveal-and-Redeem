const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  productNameOrLink: {
    type: String,
    required: true
  },
  voucherCode: {
    type: String,
    required: true,
    unique: true
  },
  dateOfReceiving: {
    type: Date,
    required: true
  },
  dateOfExpiry: {
    type: Date,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true
  }
 
});

const Voucher = mongoose.model('Voucher', voucherSchema);

module.exports = Voucher;
