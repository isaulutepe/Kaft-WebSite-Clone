
// authRoutes.js

const express = require('express');
const router = express.Router();
const authController= require('../controllers/authController');


// POST /login
router.post('/login', authController.loginCustomer);
// facebook


module.exports = router;
