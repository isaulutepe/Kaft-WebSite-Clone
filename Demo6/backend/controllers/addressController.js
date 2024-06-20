// addressController.js

const Address = require('../models/addressModel');

// Yeni adres eklemek
const createAddress = async (req, res) => {
    try {
        const newAddress = await Address.create(req.body);
        res.status(201).json(newAddress);
    } catch (error) {
        res.status(400).json({ message: 'Adres eklenirken bir hata oluştu.' });
    }
};

// Tüm adresleri getirmek
const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find();
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ message: 'Adresler getirilirken bir hata oluştu.' });
    }
};

module.exports = {
    createAddress,
    getAddresses
    // Diğer işlevleri de ekleyebilirsiniz (güncelleme, silme vb.)
};
