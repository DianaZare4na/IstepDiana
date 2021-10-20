let express = require('express');
let router = express.Router();

let cProduct = require('./controllers/productController')
router.get ('/api/products',cProduct.get);
router.post('/api/products',cProduct.post);
router.put('/api/products',cProduct.put);
router.delete('/api/products',cProduct.delete);


let cFiles = require('./controllers/fileController');
router.post('/api/files', cFiles.createFile);

module.exports = router;