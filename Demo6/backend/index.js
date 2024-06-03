
//VERİTABANI APİ ROUTER YONLENDİRMELERİ BU İNDEX İÇİNDE YAPILACAK.
const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const adressRoutes = require('./routes/adressRoutes');


const app = express();
const port = 3001;

// CORS'u etkinleştirme
app.use(cors());

app.use('/api/users', userRoutes);    // /api/users ile kullanıcı rotalarını tanımlar
app.use('/api/products', productRoutes); // /api/products ile ürün rotalarını tanımlar
app.use('/api/categories', categoryRoutes); // /api/categories ile kategorri rotalarını tanımlar
app.use('/api/adresses', adressRoutes); // /api/adresses ile adres rotalarını tanımlar



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


