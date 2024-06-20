// addressRoutes.js

const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// Yeni adres eklemek için POST isteği
router.post('/', addressController.createAddress);

// Tüm adresleri getirmek için GET isteği
router.get('/', addressController.getAddresses);

// Diğer rotaları da ekleyebilirsiniz (güncelleme, silme vb.)

module.exports = router;
