console.log('I am in the controller')
const Authors = require('../models/author.model');

module.exports.findAllAuthors = (req, res) => {
    Authors.find()
        .then(allAuthors => res.json({ results:allAuthors}))
        .catch(err => res.json({ message: 'error on find all authors', err }));
}

module.exports.findAuthor = (req, res) => {
    Authors.findOne({ _id: req.params.id})
        .then(singleAuthor => res.json({results:singleAuthor}))
        .catch(err => res.json({ message: 'could not find specific author', err}))
}

module.exports.createAuthor = (req, res) => {
    console.log(req.body)
    Authors.create(req.body)
        .then(author => res.json({ results:author}))
        .catch(err => res.json({ message: 'could not create author', err }));
}

module.exports.updateAuthor = (req, res) => {
    Authors.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true})
        .then(singleAuthor => res.json({results:singleAuthor}))
        .catch(err => res.json({ message: 'could not update specific author', err}))
}

module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne({_id: req.params.id})
        .then(deletedAuthor => res.json({results: deletedAuthor}))
        .catch(err => res.json({message: 'could not delete this author', err}))
}
