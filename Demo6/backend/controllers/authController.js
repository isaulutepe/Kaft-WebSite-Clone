// authController.js

const Customer = require('../models/customerModel');

const loginCustomer = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const customer = await Customer.findOne({ email });

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        const isMatch = await customer.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isAdmin = email === 'admin@gmail.com';
        res.status(200).json({ message: 'Login successful', customerName: customer.name, isAdmin });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    loginCustomer
};
