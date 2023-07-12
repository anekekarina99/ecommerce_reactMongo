const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Endpoint untuk mendapatkan semua produk
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint untuk membuat produk baru
router.post('/products', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    // Set properti lain sesuai kebutuhan
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Tambahkan endpoint lain seperti update dan delete

module.exports = router;