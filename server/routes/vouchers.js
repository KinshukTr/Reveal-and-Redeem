// routes/voucher.js
 
const express = require('express');
const router = express.Router();
const Voucher = require('../models/VouchersSchema');
const authenticate = require('../middleware/authenticate');

// Fetch all vouchers for the logged-in user
router.get('/voucher', authenticate, async (req, res) => {
  try {
    // Find all vouchers associated with the logged-in user
    const vouchers = await Voucher.find({ userId: req.user.userId }).exec();
    res.status(200).json(vouchers);
  } catch (error) {
    console.error('Error fetching vouchers:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new voucher
router.post('/voucher', authenticate, async (req, res) => {
  try {
    const { platform, brandName, productNameOrLink, voucherCode, dateOfReceiving, dateOfExpiry,category } = req.body;

    // Create a new voucher
    const voucher = new Voucher({
      platform,
      brandName,
      productNameOrLink,
      voucherCode,
      dateOfReceiving,
      dateOfExpiry,
      userId: req.user.userId ,// Use req.user.userId here
      category
    });

    await voucher.save();
    res.status(201).json({ message: 'Voucher created successfully' });
  } catch (error) {
    console.error('Error creating voucher:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a voucher
router.delete('/voucher/:id', authenticate, async (req, res) => {
  try {
    const voucherId = req.params.id;
    const userId = req.user.userId;

    // Ensure that only the owner of the voucher can delete it
    const deletedVoucher = await Voucher.findOneAndDelete({ _id: voucherId, userId });

    if (!deletedVoucher) {
      return res.status(404).json({ message: 'Voucher not found or you are not authorized to delete it' });
    }

    res.status(200).json({ message: 'Voucher deleted successfully' });
  } catch (error) {
    console.error('Error deleting voucher:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
