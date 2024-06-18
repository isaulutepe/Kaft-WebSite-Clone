const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');

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
router.post('/', upload.single('image'), productController.createProduct);

// Diğer route'lar
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.patch('/:id', upload.single('image'), productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
// Resim yükleme için rota
router.post('/upload', upload.single('file'), (req, res) => {
    // Yüklenen dosyanın yolunu ve diğer bilgilerini işle
    res.json({ filePath: req.file.path });
});

// Ürün güncelleme
router.use((req, res, next) => {
    console.log(req.body);
    next();
});

router.put('/:id', upload.single('image'), productController.updateProduct);

module.exports = router;
