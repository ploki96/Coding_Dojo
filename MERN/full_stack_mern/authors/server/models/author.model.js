const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Add a title"],
            minlength: [3, "Minimum 3 char"]
        }
    }, {timestamps: true});

    const Authors = mongoose.model("Authors", AuthorsSchema)

    module.exports = Authors;