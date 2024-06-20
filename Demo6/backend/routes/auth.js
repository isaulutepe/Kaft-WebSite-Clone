
// authRoutes.js

const express = require('express');
const router = express.Router();
const authController= require('../controllers/authController');


// POST /login
router.post('/login', authController.loginCustomer);
// facebook
router.post('/facebooklogin', authController.facebooklogin);

module.exports = router;
