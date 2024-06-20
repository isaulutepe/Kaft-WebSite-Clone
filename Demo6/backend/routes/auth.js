
// authRoutes.js

const express = require('express');
const router = express.Router();
const {authController,facebooklogin} = require('../controllers/authController');

// POST /login
router.post('/login', authController.loginCustomer);
// facebook
router.post('/facebooklogin',facebooklogin);

module.exports = router;
