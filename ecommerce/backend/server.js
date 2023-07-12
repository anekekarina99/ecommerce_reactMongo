const express = require('express');

const app = express();
const port = 3000;

// Data dummy produk
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

app.use(express.json());

// Mendapatkan semua produk
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Mendapatkan produk berdasarkan ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.sendStatus(404);
    return;
  }

  res.json(product);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
