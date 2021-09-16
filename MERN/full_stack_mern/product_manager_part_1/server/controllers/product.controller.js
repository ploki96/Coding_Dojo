console.log('I am in the controller')
const Products = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Products.find()
        .then(allProducts => res.json({ results:allProducts}))
        .catch(err => res.json({ message: 'error on find all products', err }));
}

module.exports.findProduct = (req, res) => {
    Products.findOne({ _id: req.params.id})
        .then(singleProduct => res.json({results:singleProduct}))
        .catch(err => res.json({ message: 'could not find specific product', err}))
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Products.create(req.body)
        .then(product => res.json({ results:product}))
        .catch(err => res.json({ message: 'could not create product', err }));
}

module.exports.updateProduct = (req, res) => {
    Products.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true})
        .then(singleProduct => res.json({results:singleProduct}))
        .catch(err => res.json({ message: 'could not update specific product', err}))
}

module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json({results: deletedProduct}))
        .catch(err => res.json({message: 'could not delete this product', err}))
}
