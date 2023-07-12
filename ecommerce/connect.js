const mongoose = require('mongoose');

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Terhubung ke MongoDB');
})
.catch((error) => {
  console.error('Koneksi MongoDB gagal', error);
});