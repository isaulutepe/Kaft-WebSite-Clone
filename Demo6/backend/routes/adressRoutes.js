
const express = require('express');
const router = express.Router();
const adressController = require('../controllers/adressController');

router.get('/adresses', adressController.getAdress);

module.exports = router;
