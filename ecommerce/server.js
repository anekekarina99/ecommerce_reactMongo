
const express = require('express');
const app = express();
const axios = require('axios');
const productRoutes = require('./routes/products');

//app.use(express.json());
//app.use('/api', productRoutes);

// Endpoint root
/*app.get('/', (req, res) => {
  res.send('API Penjualan Produk Pakaian');
});
*/

app.get('/', (req, res) => {
  axios.get('http://localhost:3003/api/products')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});
// Jalankan server
/*const port = 3003;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});*/