const ProductsController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductsController.findAllProducts);
    app.get('/api/products/:id', ProductsController.findProduct);
    app.post('/api/products/new', ProductsController.createProduct);
    app.patch('/api/products/:id/update', ProductsController.updateProduct);
    app.delete('/api/products/:id/delete', ProductsController.deleteProduct)
}