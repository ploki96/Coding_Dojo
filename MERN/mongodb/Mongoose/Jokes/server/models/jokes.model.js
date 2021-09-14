const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Put this in"],
            minlength: [10, "Minimum 10 char"]
        },
        punchline: {
            type:String,
            required: [true, "Put this in"],
            minlength: [3, "Minimum 3 char"]
        }
    });

    const Jokes = mongoose.model("Jokes", JokesSchema)

    module.exports = Jokes;