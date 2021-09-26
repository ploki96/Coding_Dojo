const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const AuthorsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Add a name"],
            minlength: [3, "Minimum 3 characters"],
            unique: [true,"Author must be unique"]
        }
    }, {timestamps: true});

    AuthorsSchema.plugin(uniqueValidator)

    const Authors = mongoose.model("Authors", AuthorsSchema)

    module.exports = Authors;