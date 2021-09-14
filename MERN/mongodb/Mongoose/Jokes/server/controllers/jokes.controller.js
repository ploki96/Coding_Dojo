console.log('I am in the controller')
const Jokes = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({ results:allJokes}))
        .catch(err => res.json({ message: 'error on find all jokes', err }));
}

module.exports.findJoke = (req, res) => {
    Jokes.findOne({ _id: req.params._id})
        .then(singleJoke => res.json({results:singleJoke}))
        .catch(err => res.json({ message: 'could not find specific joke', err}))
}

module.exports.createJoke = (req, res) => {
    console.log(req.body)
    Jokes.create(req.body)
        .then(joke => res.json({ results:joke}))
        .catch(err => res.json({ message: 'could not create joke', err }));
}

module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({_id: req.params._id},
        req.body,
        {new:true, runValidators: true})
        .then(singleJoke => res.json({results:singleJoke}))
        .catch(err => res.json({ message: 'could not update specific joke', err}))
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json({results: deletedJoke}))
        .catch(err => res.json({message: 'could not delete this joke', err}))
}

// module.exports = {
//     createJoke: (req, res) => {
//     const {setup, punchline} = req.body;
//     Jokes.create({
//         setup: setup,
//         punchline: punchline
//     })
//     .then(joke =>
//         res.json(joke))
//     .catch(err => res.json({ message: "could not create the joke", err}));
// }}
