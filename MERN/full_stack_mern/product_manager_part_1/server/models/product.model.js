const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Add a title"],
            minlength: [3, "Minimum 3 char"]
        },
        price: {
            type: Number,
            required: [true, "Add a price"],
            min: [1, "Must be positive"]
        },
        description: {
            type: String,
            required: [true, "Add a description"],
            minlength: [5, "Minimum 5 char"]
        }
    });

    const Products = mongoose.model("Products", ProductsSchema)

    module.exports = Products;