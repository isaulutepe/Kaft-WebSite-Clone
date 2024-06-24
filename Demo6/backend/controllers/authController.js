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


const facebooklogin = async (req, res) => {
    const { userID, accessToken } = req.body;

    try {
        const urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}?fields=id,name,email&access_token=${accessToken}`;
        const response = await fetch(urlGraphFacebook);
        const data = await response.json();

        const { email, name } = data;

        let user = await User.findOne({ email });

        if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SIGNIN_KEY, { expiresIn: '7d' });
            const { _id } = user;
            return res.json({ token, user: { _id, name, email } });
        } else {
            let password = email + process.env.JWT_SIGNIN_KEY;
            let newUser = new User({ name, email, password });

            newUser = await newUser.save();

            const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SIGNIN_KEY, { expiresIn: '7d' });
            const { _id } = newUser;
            return res.json({ token, user: { _id, name, email } });
        }
    } catch (error) {
        return res.status(400).json({ error: 'Something went wrong...' });
    }
};
module.exports = {
    loginCustomer,
    facebooklogin

};