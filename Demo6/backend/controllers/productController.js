const Product = require('../models/productModel');


const multer = require('multer');
const path = require('path');

// Multer storage ve file filter yapılandırması
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    // Yalnızca resim dosyalarını kabul et
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Yalnızca resim dosyaları kabul edilir!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

// Yeni ürün ekleme
exports.createProduct = async (req, res) => {
    try {
        const product = new Product({
            title: req.body.title,
            image: req.file.path,
            description: req.body.description,
            content: req.body.content,
            price: req.body.price,
            color: req.body.color,
            count: req.body.count
        });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// Tüm ürünleri listeleme
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Belirli bir ürünü alma
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Ürün bulunamadı' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Ürünü güncelleme
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ message: 'Ürün bulunamadı' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Ürünü silme
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Ürün bulunamadı' });
        }
        res.status(200).json({ message: 'Ürün silindi' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};